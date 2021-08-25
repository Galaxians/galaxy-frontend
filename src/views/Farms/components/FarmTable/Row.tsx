import React, { useState, useEffect } from "react";
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
  margin: auto;
  padding: 24px 0px;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  // padding-right: 8px;

  ${({ theme }) => theme.mediaQueries.xl} {
    padding-right: 32px;
  }
  @media(max-width: 500px) {
    padding: 12px 0px;
  }
`;

const StyledTr = styled.tr`
  cursor: pointer;
  background: #0B001E 0% 0% no-repeat padding-box;
`;

const EarnedMobileCell = styled.td`
  padding: 16px 0 24px 16px;
  width: 50%;
`;

const AprMobileCell = styled.td`
  padding-top: 16px;
  padding-bottom: 24px;
  width: 50%;
`;

const FarmMobileCell = styled.td`
  padding-top: 24px;
`;

const Row: React.FunctionComponent<RowProps> = (props) => {
  const { details } = props;
  const [actionPanelToggled, setActionPanelToggled] = useState(false);
  const TranslateString = useI18n();

  const toggleActionPanel = () => {
    setActionPanelToggled(!actionPanelToggled);
  };

  const { isXl } = useMatchBreakpoints();
  let small = false;
  if(window.innerWidth < 384) small = true;
  const [isXs, setXs]  = useState(small);
  window.addEventListener('resize', function() {
    if(window.innerWidth < 384)
      setXs(true);
    else setXs(false);
  }, true);
  
  const isMobile = !isXl;
  const tableSchema = isMobile ? MobileColumnSchema : DesktopColumnSchema;
  const columnNames = tableSchema.map((column) => column.name);

  const handleRenderRow = () => {
    // if (!isXs) {
      return (
        <StyledTr onClick={toggleActionPanel}>
          {Object.keys(props).map((key) => {
            const columnIndex = columnNames.indexOf(key);
            if (columnIndex === -1) {
              return null;
            }

            switch (key) {
              case "details":
                return (
                  <td className="farm-table" key={key}>
                    <CellInner>
                      <CellLayout>
                        <Details actionPanelToggled={actionPanelToggled} />
                      </CellLayout>
                    </CellInner>
                  </td>
                );
              case "apr":
                return (
                  <td className="farm-table" key={key}>
                    <CellInner>
                      <CellLayout label={TranslateString(736, "APR")}>
                        <Apr {...props.apr} hideButton={isMobile} />
                      </CellLayout>
                    </CellInner>
                  </td>
                );
              default:
                return (
                  <td className="farm-table" key={key}>
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
                  </td>
                );
            }
          })}
        </StyledTr>
      );
    // }

    // return (
    //   <StyledTr onClick={toggleActionPanel}>
    //     <td className="farm-table">
    //       <tr>
    //         <FarmMobileCell>
    //           <CellLayout>
    //             <Farm {...props.farm} />
    //           </CellLayout>
    //         </FarmMobileCell>
    //       </tr>
    //       <tr>
    //         <td>
    //           <tr>
    //             <EarnedMobileCell>
    //               <CellLayout label={TranslateString(1072, "Earned")}>
    //                 <Earned {...props.earned} />
    //               </CellLayout>
    //             </EarnedMobileCell>
    //             <AprMobileCell className="pl-2">
    //               <CellLayout label={TranslateString(736, "APR")}>
    //                 <Apr {...props.apr} hideButton />
    //               </CellLayout>
    //             </AprMobileCell>
    //           </tr>
    //         </td>
            
    //       </tr>
    //     </td>
    //     <td className="farm-table">
    //       <CellInner>
    //         <CellLayout>
    //           <Details actionPanelToggled={actionPanelToggled} />
    //         </CellLayout>
    //       </CellInner>
    //     </td>
    //   </StyledTr>
    // );
  };

  return (
    <>
      {handleRenderRow()}
      {actionPanelToggled && details && (
        <tr>
          <td colSpan={6}>
            <ActionPanel {...props} />
          </td>
        </tr>
      )}
    </>
  );
};

export default Row;
