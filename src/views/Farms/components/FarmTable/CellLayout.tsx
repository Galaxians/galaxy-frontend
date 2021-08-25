import React from "react";
import styled from "styled-components";
import { HelpIcon, Text } from "glx-uikit";
import useI18n from "hooks/useI18n";

import Tooltip from "../Tooltip/Tooltip";

const Label = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  text-align: left;
  margin-right: 12px;
  font-size: 15px; 
  font-weight: 300; 
  margin-bottom: 15px;
  @media (max-width: 500px) {
    font-size: 12px;
    margin-bottom: 5px;
  }
`;

const ResHelpIcon = styled(HelpIcon)`
  @media (max-width: 500px) {
    display: none;
  }
`


const ContentContainer = styled.div`
  min-height: 24px;
  display: flex;
  align-items: center;
  
`;
// margin-top: 16px;

interface CellLayoutProps {
  label?: string;
}

const CellLayout: React.FC<CellLayoutProps> = ({ label = "", children }) => {
  const TranslateString = useI18n();
  const getContents = (labelName) => {
    switch (labelName) {
      case "APR": 
        return "APR";
      case "Liquidity":
        return TranslateString(999, "The total value of the funds in this farm’s liquidity pool");
      case "Multiplier":
        return (
          <div>
            {TranslateString(
              999,
              "The multiplier represents the amount of GLX rewards each farm gets."
            )}
            <br />
            <br />
            {TranslateString(
              999,
              "For example, if a 1x farm was getting 1 GLX per block, a 40x farm would be getting 40 GLX per block."
            )}
          </div>
        );
      default: return "";
    }
  }
  const contents = getContents(label);

  
  return (
    <div style={{paddingRight: 8}}>
      {label && 
      <div className="d-flex flex-row">
        <Label>{label}</Label>
        {label !== "Earned" && <Tooltip
          content={contents}
        >
          <ResHelpIcon width="16px" height="16px" color="primary" />
        </Tooltip>}
      </div>}
      <ContentContainer>{children}</ContentContainer>
    </div>
  );
};

export default CellLayout;
