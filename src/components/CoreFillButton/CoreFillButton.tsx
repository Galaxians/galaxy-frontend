import React from "react";
import styled from "styled-components";
import { CheckmarkCircleIcon, Text } from "glx-uikit";
import CheckMarkFill from "./check-mark-fill.svg";

export interface CoreButtonProps {
  onClick?: () => void;
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 2px;
  border: 2px solid #ff1fff;
  border-radius: 16px;
  svg {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

const BackDiv = styled.div`
  position: absolute;
  width: 15px;
  height: 15px;
  top: 5px;
  left: 5px;
  border-radius: 50%;
  background: white;
`;

const ButtonText = styled(Text)`
  font-size: 14px;
  font-weight: 100;
  padding: 0 14px;
  margin-bottom: 2px;
`;

const CoreFillButton: React.FC<CoreButtonProps> = ({
  onClick = () => null,
}) => {
  return (
    <Wrapper aria-label="coreButton" role="button" onClick={() => onClick()}>
      <BackDiv />
      <img src={CheckMarkFill} alt="checkmarkt" style={{ zIndex: 1 }} />
      <ButtonText color="contrast">Core</ButtonText>
    </Wrapper>
  );
};

export default CoreFillButton;
