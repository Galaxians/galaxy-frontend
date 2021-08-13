import React from "react";
import { Card, Flex, Text } from "glx-uikit";
import styled from "styled-components";
import { getBalanceNumber } from "utils/formatBalance";
import { useTotalSupply, useBurnedBalance } from "hooks/useTokenBalance";
import useI18n from "hooks/useI18n";
import { getCakeAddress } from "utils/addressHelpers";
import CardValue from "./CardValue";

const StyledCakeStats = styled(Card)`
  background: rgba(0,0,0,0);
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  min-width:360px;
  display: flex;
  flex-direction: column;
  align-items: left;
  border: 1px solid #61319F;
  border-radius: 8px;
  padding: 10px 22px;
`;

const Row = styled.div`
  align-items: center;
  display: flex;
  color: white;
  justify-content: space-between;
  margin-bottom: 8px;
`;
const CardValueWrapper = styled.div`
  width: 40%;
`

const CakeStats = () => {
  const TranslateString = useI18n();
  const totalSupply = useTotalSupply();
  const burnedBalance = getBalanceNumber(useBurnedBalance(getCakeAddress()));
  const cakeSupply = totalSupply
    ? getBalanceNumber(totalSupply) - burnedBalance
    : 0;

  return (
    <StyledCakeStats>
        <Text fontSize="35px" color="#ff1fff" bold fontWeight="900" >
          {TranslateString(534, "GLX Stats")}
        </Text>
        <Flex flexDirection="column" mt="10px" >
          <Row>
            <Text fontWeight="300" color="contrast" fontSize="20px">
              {TranslateString(536, "Total GLX Supply")}
            </Text>
            <CardValueWrapper>
              {cakeSupply ===0 ? <CardValue fontWeight="300" color="contrast" decimals={0} fontSize="20px" value={cakeSupply} /> : <Text fontWeight="300" color="contrast" fontSize="20px" bold>0</Text>}
            </CardValueWrapper>
            
          </Row>
          <Row>
            <Text fontWeight="300" color="contrast" fontSize="20px">
              {TranslateString(538, "Total GLX Burned")}
            </Text>
            <CardValueWrapper><CardValue fontWeight="300" fontSize="20px" decimals={0} value={burnedBalance} /></CardValueWrapper>
          </Row>
          <Row style={{marginBottom:0}} >
            <Text fontWeight="300" color="contrast" fontSize="20px">{TranslateString(540, "New GLX/block")}</Text>
            <CardValueWrapper><CardValue fontWeight="300" fontSize="20px" decimals={0} value={25} /></CardValueWrapper>
          </Row>
        </Flex>
    </StyledCakeStats>
  );
};

export default CakeStats;
