import React, { useState } from "react";
import styled from "styled-components";
import { FarmWithStakedValue } from "views/Farms/components/FarmCard/FarmCard";
import { useMatchBreakpoints } from "glx-uikit";
import useI18n from "hooks/useI18n";

import Apr, { AprProps } from "./Apr";
import Farm, { FarmProps } from "./Farm";
import Earned, { EarnedProps } from "./Earned";
import Details from "./Details";
import Multiplier, { MultiplierProps } from "./Multiplier";
import Liquidity, { LiquidityProps } from "./Liquidity";
import ActionPanel from "./Actions/ActionPanel";
import CellLayout from "./CellLayout";
import { DesktopColumnSchema, MobileColumnSchema } from "../types";

export interface RowProps {
  apr: AprProps;
  farm: FarmProps;
  earned: EarnedProps;
  multiplier: MultiplierProps;
  liquidity: LiquidityProps;
  details: FarmWithStakedValue;
}

const cells = {
  apr: Apr,
  farm: Farm,
  earned: Earned,
  details: Details,
  multiplier: Multiplier,
  liquidity: Liquidity,
};

const CellInner = styled.div`
  padding: 24px 0px;
  display: flex;
  width: 100%;
  align-items: center;
  padding-right: 8px;

  ${({ theme }) => theme.mediaQueries.xl} {
    padding-right: 32px;
  }
`;

const StyledTr = styled.div<{ showBottom: boolean }>`
  cursor: pointer;
  display: flex;
  background: #0B001E;
  margin-bottom: ${({ showBottom }) => showBottom ? '0px' : '10px'};
  border-radius: ${({ showBottom }) => showBottom ? '15px 15px 0px 0px' : '15px'};
  justify-content: space-between;
  align-items: center;
`;

const EarnedMobileCell = styled.div`
  padding: 16px 0 24px 16px;
`;

const AprMobileCell = styled.div`
  padding-top: 16px;
  padding-bottom: 24px;
`;

const FarmMobileCell = styled.div`
  padding-top: 24px;
`;

const Row: React.FunctionComponent<RowProps> = (props) => {
  const { details } = props;
  const [actionPanelToggled, setActionPanelToggled] = useState(false);
  const TranslateString = useI18n();

  const toggleActionPanel = () => {
    setActionPanelToggled(!actionPanelToggled);
  };

  const { isXl, isXs } = useMatchBreakpoints();

  const isMobile = !isXl;
  const tableSchema = isMobile ? MobileColumnSchema : DesktopColumnSchema;
  const columnNames = tableSchema.map((column) => column.name);

  const handleRenderRow = () => {
    if (!isXs) {
      return (
        <StyledTr onClick={toggleActionPanel} showBottom={!!(actionPanelToggled && details)}>
          {Object.keys(props).map((key) => {
            const columnIndex = columnNames.indexOf(key);
            if (columnIndex === -1) {
              return null;
            }

            switch (key) {
              case "details":
                return (
                  <div key={key}>
                    <CellInner>
                      <CellLayout>
                        <Details actionPanelToggled={actionPanelToggled} />
                      </CellLayout>
                    </CellInner>
                  </div>
                );
              case "apr":
                return (
                  <div key={key}>
                    <CellInner>
                      <CellLayout label={TranslateString(736, "APR")}>
                        <Apr {...props.apr} hideButton={isMobile} />
                      </CellLayout>
                    </CellInner>
                  </div>
                );
              default:
                return (
                  <div key={key}>
                    <CellInner>
                      <CellLayout
                        label={TranslateString(
                          tableSchema[columnIndex].translationId,
                          tableSchema[columnIndex].label
                        )}
                      >
                        {React.createElement(cells[key], props[key])}
                      </CellLayout>
                    </CellInner>
                  </div>
                );
            }
          })}
        </StyledTr>
      );
    }

    return (
      <StyledTr onClick={toggleActionPanel} showBottom={!!(actionPanelToggled && details)}>
        <div>
          <tr>
            <FarmMobileCell>
              <CellLayout>
                <Farm {...props.farm} />
              </CellLayout>
            </FarmMobileCell>
          </tr>
          <tr>
            <EarnedMobileCell>
              <CellLayout label={TranslateString(1072, "Earned")}>
                <Earned {...props.earned} />
              </CellLayout>
            </EarnedMobileCell>
            <AprMobileCell>
              <CellLayout label={TranslateString(736, "APR")}>
                <Apr {...props.apr} hideButton />
              </CellLayout>
            </AprMobileCell>
          </tr>
        </div>
        <div>
          <CellInner>
            <CellLayout>
              <Details actionPanelToggled={actionPanelToggled} />
            </CellLayout>
          </CellInner>
        </div>
      </StyledTr>
    );
  };

  return (
    <>
      {handleRenderRow()}
      {actionPanelToggled && details && (
        <ActionPanel {...props} />
      )}
    </>
  );
};

export default Row;
