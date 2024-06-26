import React from "react";
import styled from "styled-components";
import { CheckmarkCircleIcon, Text } from "glx-uikit";

export interface CoreButtonProps {
  onClick?: () => void;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 2px solid #ff1fff;
  border-radius: 30px;
  svg {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

const CoreButton: React.FC<CoreButtonProps> = ({
  onClick,
}) => {
  return (
    <Wrapper
      aria-label="coreButton"
      role="button"
      onClick={() => onClick()}
    >
      <CheckmarkCircleIcon />
      <Text color="primary" className="px-2">
        Core
      </Text>
    </Wrapper>
  );
};

export default CoreButton;
