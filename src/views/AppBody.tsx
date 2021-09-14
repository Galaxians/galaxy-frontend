import React from "react";
import styled from "styled-components";
import { Card } from "glx-uikit";

export const BodyWrapper = styled(Card)`
  position: relative;
  // min-width: 478px;
  min-height: 420px;
  width: 100%;
  z-index: 0;
  padding: 29px;
  border-radius: 11px;
  //background: #0b001e 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 99px #ff1fff38;
  @media (max-width: 478px) {
    padding: 0px 25px 25px 25px;
    min-height: unset;
  }
`;

export const Body = styled.div`
  width: auto;
  border: 1px solid #ff1fff;
  border-radius: 11px;
  margin-top: 100px;
  @media (max-width: 478px) {
    width: 99%;
    // padding: 5px;
  }
`;

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */

export default function AppBody({ children }: { children: React.ReactNode }) {
  return (
    <Body>
      <BodyWrapper>{children}</BodyWrapper>
    </Body>
  );
}
