import React, { useEffect, useCallback, useState } from "react";
import { Route, useRouteMatch, useLocation, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import BigNumber from "bignumber.js";
import { useWeb3React } from "@web3-react/core";
import { Image, Heading, RowType, Toggle, Text } from "glx-uikit";
import styled from "styled-components";
import { BLOCKS_PER_YEAR, CAKE_PER_BLOCK, CAKE_POOL_PID } from "config";
import FlexLayout from "components/layout/Flex";
import Page from "components/layout/Page";
import {
  useFarms,
  usePriceBnbBusd,
  usePriceCakeBusd,
  usePriceEthBusd,
} from "state/hooks";
import useRefresh from "hooks/useRefresh";
import { fetchFarmUserDataAsync } from "state/actions";
import { QuoteToken } from "config/constants/types";
import useI18n from "hooks/useI18n";
import { getBalanceNumber } from "utils/formatBalance";
import { orderBy } from "lodash";

import FarmCard, { FarmWithStakedValue } from "./components/FarmCard/FarmCard";
import Table from "./components/FarmTable/FarmTable";
import FarmTabButtons from "./components/FarmTabButtons";
import SearchInput from "./components/SearchInput";
import { RowProps } from "./components/FarmTable/Row";
import ToggleView from "./components/ToggleView/ToggleView";
import { DesktopColumnSchema, ViewMode } from "./components/types";
import Select, { OptionProps } from "./components/Select/Select";

const ControlContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-direction: row;
  color: #ffffff;
  box-shadow: 0px 3px 29px #FF1FFF24;
  border: 1px solid #FF1FFF;
  border-radius: 9px;
  padding: 28px 18px;
  padding-left: 58px;
  background: #0B001E 0% 0% no-repeat padding-box;
  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    padding: 16px 32px;
    & > * {
      width: 100%;
    }
  }
`;

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  ${Text} {
    margin-left: 8px;
  }
  
`;

const LabelWrapper = styled.div`
  > ${Text} {
    margin-bottom: 6px;
    font-size: 14px;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0px;
  border-radius: 8px;
  gap: 18px;
  justify-content: space-between;
  @media only screen and (max-width: 620px) {
    flex-direction: column;
    & > * {
      width: 100%;
    }
  }
`;

const ViewControls = styled.div`
  flex-wrap: wrap;
  justify-content: space-around;
  display: flex;
  gap: 30px;
  margin-top: 24px;
  > div {
    //padding: 8px 0px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    justify-content: space-between;

    > div {
      padding: 0;
    }
  }
`;

const StyledImage = styled(Image)`
  margin-left: auto;
  margin-right: auto;
  margin-top: 58px;
`;

const Header = styled.div`
  padding: 32px 0px;
  //background: ${({ theme }) => theme.colors.gradients.bubblegum};
  background: transperent;
  color: #ffffff !important;
  padding-left: 16px;
  padding-right: 16px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

const Wrapper = styled.div`
  max-width: 1054px;
  margin: auto;
  margin-top: 150px;
`

const Farms: React.FC = () => {
  const { path } = useRouteMatch();
  const { pathname } = useLocation();
  const TranslateString = useI18n();
  const farmsLP = useFarms();
  const cakePrice = usePriceCakeBusd();
  const bnbPrice = usePriceBnbBusd();
  const [query, setQuery] = useState("");
  const [viewMode, setViewMode] = useState(ViewMode.CARD);
  const ethPriceUsd = usePriceEthBusd();
  // console.log(ethPriceUsd.toNumber());
  const { account } = useWeb3React();
  const [sortOption, setSortOption] = useState("hot");

  const dispatch = useDispatch();
  const { fastRefresh } = useRefresh();
  useEffect(() => {
    if (account) {
      dispatch(fetchFarmUserDataAsync(account));
    }
  }, [account, dispatch, fastRefresh]);
  const [stackedOnly, setStackedOnly] = useState(false);
  const history = useHistory();
  const [finishedOnly, setFinishedOnly] = useState(false);
  useEffect(() => {
    if(!finishedOnly)
      history.push("/farms");
    else history.push("/farms/history")
  }, [finishedOnly, history])
  const activeFarms = farmsLP.filter(
    (farm) => farm.multiplier !== "0X" && !farm.isTokenOnly
  );
  const inactiveFarms = farmsLP.filter(
    (farm) => farm.multiplier === "0X" && !farm.isTokenOnly
  );
  // samarth
  const stackedOnlyFarms = activeFarms.filter(
    (farm) =>
      farm.userData &&
      new BigNumber(farm.userData.stakedBalance).isGreaterThan(0)
  );

  const sortFarms = (farms: FarmWithStakedValue[]): FarmWithStakedValue[] => {
    switch (sortOption) {
      case "apr":
        return orderBy(farms, "apy", "desc");
      case "multiplier":
        return orderBy(
          farms,
          (farm: FarmWithStakedValue) => Number(farm.multiplier.slice(0, -1)),
          "desc"
        );
      case "earned":
        return orderBy(
          farms,
          (farm: FarmWithStakedValue) =>
            farm.userData ? farm.userData.earnings : 0,
          "desc"
        );
      case "liquidity":
        return orderBy(
          farms,
          (farm: FarmWithStakedValue) => Number(farm.liquidity),
          "desc"
        );
      default:
        return farms;
    }
  };

  // /!\ This function will be removed soon
  // This function compute the APY for each farm and will be replaced when we have a reliable API
  // to retrieve assets prices against USD
  const farmsList = useCallback(
    (farmsToDisplay): FarmWithStakedValue[] => {
      const cakePriceVsBNB = new BigNumber(
        farmsLP.find((farm) => farm.pid === CAKE_POOL_PID)?.tokenPriceVsQuote ||
          0
      );
      let farmsToDisplayWithAPY: FarmWithStakedValue[] = farmsToDisplay.map(
        (farm) => {
          if (!farm.tokenAmount || !farm.lpTotalInQuoteToken) {
            return farm;
          }
          const cakeRewardPerBlock = CAKE_PER_BLOCK.times(farm.poolWeight);
          const cakeRewardPerYear = cakeRewardPerBlock.times(BLOCKS_PER_YEAR);

          // cakePriceInQuote * cakeRewardPerYear / lpTotalInQuoteToken
          let apy = cakePriceVsBNB
            .times(cakeRewardPerYear)
            .div(farm.lpTotalInQuoteToken);

          if (
            farm.quoteTokenSymbol === QuoteToken.BUSD ||
            farm.quoteTokenSymbol === QuoteToken.UST
          ) {
            apy = cakePriceVsBNB
              .times(cakeRewardPerYear)
              .div(farm.lpTotalInQuoteToken)
              .times(bnbPrice);
          } else if (farm.quoteTokenSymbol === QuoteToken.ETH) {
            apy = cakePrice
              .div(ethPriceUsd)
              .times(cakeRewardPerYear)
              .div(farm.lpTotalInQuoteToken);
          } else if (farm.quoteTokenSymbol === QuoteToken.CAKE) {
            apy = cakeRewardPerYear.div(farm.lpTotalInQuoteToken);
          } else if (farm.quoteTokenSymbol === QuoteToken.BNB) {
            apy = cakePrice
              .div(bnbPrice)
              .times(cakeRewardPerYear)
              .div(farm.lpTotalInQuoteToken);
          }
          // else if (farm.dual) {
          //   const cakeApy =
          //     farm &&
          //     cakePriceVsBNB
          //       .times(cakeRewardPerBlock)
          //       .times(BLOCKS_PER_YEAR)
          //       .div(farm.lpTotalInQuoteToken);
          //   const dualApy =
          //     farm.tokenPriceVsQuote &&
          //     new BigNumber(farm.tokenPriceVsQuote)
          //       .times(farm.dual.rewardPerBlock)
          //       .times(BLOCKS_PER_YEAR)
          //       .div(farm.lpTotalInQuoteToken);

          //   apy = cakeApy && dualApy && cakeApy.plus(dualApy);
          // }

          let liquidity = farm.lpTotalInQuoteToken;

          if (!farm.lpTotalInQuoteToken) {
            liquidity = null;
          }
          if (farm.quoteTokenSymbol === QuoteToken.BNB) {
            liquidity = bnbPrice.times(farm.lpTotalInQuoteToken);
          }
          if (farm.quoteTokenSymbol === QuoteToken.CAKE) {
            liquidity = cakePrice.times(farm.lpTotalInQuoteToken);
          }

          if (farm.quoteTokenSymbol === QuoteToken.ETH) {
            liquidity = ethPriceUsd.times(farm.lpTotalInQuoteToken);
          }

          return { ...farm, apy, liquidity };
        }
      );

      if (query) {
        const lowercaseQuery = query.toLowerCase();
        farmsToDisplayWithAPY = farmsToDisplayWithAPY.filter(
          (farm: FarmWithStakedValue) => {
            if (farm.lpSymbol.toLowerCase().includes(lowercaseQuery)) {
              return true;
            }

            return false;
          }
        );
      }
      return farmsToDisplayWithAPY;
    },
    [bnbPrice, farmsLP, query, cakePrice, ethPriceUsd]
  );

  const handleChangeQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const isActive = !pathname.includes("history");
  let farmsStaked = [];
  if (isActive) {
    farmsStaked = stackedOnly
      ? farmsList(stackedOnlyFarms)
      : farmsList(activeFarms);
  } else {
    farmsStaked = farmsList(inactiveFarms);
  }

  farmsStaked = sortFarms(farmsStaked);

  const rowData = farmsStaked.map((farm) => {
    const { quoteTokenAdresses, quoteTokenSymbol, tokenAddresses } = farm;
    const lpLabel =
      farm.lpSymbol && farm.lpSymbol.toUpperCase().replace("PANCAKE", "");

    const row: RowProps = {
      apr: {
        value:
          farm.apy &&
          farm.apy
            .times(new BigNumber(100))
            .toNumber()
            .toLocaleString("en-US", { maximumFractionDigits: 2 }),
        multiplier: farm.multiplier,
        lpLabel,
        quoteTokenAdresses,
        quoteTokenSymbol,
        tokenAddresses,
        cakePrice,
        originalValue: farm.apy,
      },
      farm: {
        image: farm.lpSymbol.split(" ")[0].toLocaleLowerCase(),
        label: lpLabel,
        pid: farm.pid,
      },
      earned: {
        earnings: farm.userData
          ? getBalanceNumber(new BigNumber(farm.userData.earnings))
          : null,
        pid: farm.pid,
      },
      liquidity: {
        liquidity: farm.liquidity,
      },
      multiplier: {
        multiplier: farm.multiplier,
      },
      details: farm,
    };

    return row;
  });

  const renderContent = (): JSX.Element => {
    if (viewMode === ViewMode.TABLE && rowData.length) {
      const columnSchema = DesktopColumnSchema;

      const columns = columnSchema.map((column) => ({
        id: column.id,
        name: column.name,
        label: column.label,
        sort: (a: RowType<RowProps>, b: RowType<RowProps>) => {
          switch (column.name) {
            case "farm":
              return b.id - a.id;
            case "apr":
              if (a.original.apr.value && b.original.apr.value) {
                return (
                  Number(a.original.apr.value) - Number(b.original.apr.value)
                );
              }
              return 0;
            case "earned":
              return a.original.earned.earnings - b.original.earned.earnings;
            default:
              return 1;
          }
        },
        sortable: column.sortable,
      }));

      return (
        <div>
          <div className="justify-content-center">
            <Table data={rowData} columns={columns} />
          </div>
        </div>
      );
    }

    return (
      <div>
        <Route exact path={`${path}`}>
          <div className="row justify-content-center">
            {farmsStaked.map((farm) => (
              <FarmCard
                key={farm.pid}
                farm={farm}
                bnbPrice={bnbPrice}
                cakePrice={cakePrice}
                ethPrice={ethPriceUsd}
                account={account}
                removed={false}
                className="col-lg-6 col-sm-6 col-xs-8 col-xl-4 col-xxl-4 mb-4"
              />
            ))}
          </div>
        </Route>
        <Route exact path={`${path}/history`}>
          <div className="row justify-content-center">
            {farmsStaked.map((farm) => (
              <FarmCard
                key={farm.pid}
                farm={farm}
                bnbPrice={bnbPrice}
                cakePrice={cakePrice}
                ethPrice={ethPriceUsd}
                account={account}
                removed
                className="col-lg-6 col-sm-6 col-xs-8 col-xl-4 col-xxl-4 mb-4"
              />
            ))}
          </div>
        </Route>
      </div>
    );
  };

  const handleSortOptionChange = (option: OptionProps): void => {
    setSortOption(option.value);
  };

  return (
    <>
      <Page>
        <Wrapper>
          <div className="row mb-3 rounded" style={{  marginTop: 150, margin: "auto"}}>
            <ControlContainer className="mb-1">
              <ViewControls>
                <ToggleView
                  viewMode={viewMode}
                  onToggle={(mode: ViewMode) => setViewMode(mode)}
                />
                <ToggleWrapper>
                  <Toggle
                    style={{ background: "#ffffff" }}
                    checked={stackedOnly}
                    onChange={() => setStackedOnly(!stackedOnly)}
                    scale="sm"
                  />
                  <Text fontSize="20px" fontWeight="500"> {TranslateString(1116, "Staked only")}</Text>
                </ToggleWrapper>
                <ToggleWrapper>
                  <Toggle
                    style={{ background: "#ffffff" }}
                    checked={finishedOnly}
                    onChange={() => setFinishedOnly(!finishedOnly)}
                    scale="sm"
                  />
                  <Text fontSize="20px" fontWeight="500"> {TranslateString(1116, "Finished only")}</Text>
                </ToggleWrapper>
                {/* <FarmTabButtons /> */}
              </ViewControls>
              <FilterContainer>
                <LabelWrapper>
                  <Text color="#cecece" fontWeight="100" >SORT BY</Text>
                  <Select
                    options={[
                      {
                        label: "Hot",
                        value: "hot",
                      },
                      {
                        label: "APR",
                        value: "apr",
                      },
                      {
                        label: "Multiplier",
                        value: "multiplier",
                      },
                      {
                        label: "Earned",
                        value: "earned",
                      },
                      {
                        label: "Liquidity",
                        value: "liquidity",
                      },
                    ]}
                    onChange={handleSortOptionChange}
                  />
                </LabelWrapper>
                <LabelWrapper>
                  <Text color="#cecece" fontWeight="100" >SEARCH</Text>
                  <SearchInput onChange={handleChangeQuery} value={query} />
                </LabelWrapper>
              </FilterContainer>
            </ControlContainer>
          </div>
          {renderContent()}

          {/* <StyledImage
            src="/images/3dpan.png"
            alt="Galaxia illustration"
            width={120}
            height={103}
          /> */}
        </Wrapper>
      </Page>
    </>
  );
};

export default Farms;
