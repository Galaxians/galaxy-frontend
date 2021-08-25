import React from "react"
import styled from "styled-components"
import { CheckmarkCircleIcon, Text } from "glx-uikit"
import CheckMarkFill from './check-mark-fill.svg'

export interface CoreButtonProps {
  onClick?: () => void;
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 1px 0px;
  border: 2px solid #ff1fff;
  border-radius: 30px;
  svg {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;
const BackDiv = styled.div`
  position: absolute;
  width:15px;
  height:15px;
  top:5px;
  left:5px;
  background: white;
`;
const CoreFillButton: React.FC<CoreButtonProps> = ({
  onClick,
}) => {
  return (
    <Wrapper
      aria-label="coreButton"
      role="button"
      onClick={() => onClick()}
    >
      {/* style={{fill: 'red', width:"24px", height:"24px" }} */}
      <BackDiv />
      <img src={CheckMarkFill} alt="checkmarkt" style={{zIndex: 1}} />
      <Text color="contrast" fontSize="14px" fontWeight="100" className="px-2">
        Core
      </Text>
    </Wrapper>
  );
};

export default CoreFillButton;
