import styled from "styled-components";
import { Button } from "glx-uikit";

export default styled(Button)`
  border-radius: 8px;
  height: fit-content;
  padding: 8px 39px;
  color: #ffe4f2;
  letter-spacing: 0;
  line-height: 18px;
  font: normal normal medium 19px/22px Mosk;
  &:hover {
    color: #ffe3f2 !important;
  }
  &:disabled {
    background-color: #848484;
    border-color: #848484;
  }
  .pancake-button--disabled {
    background-color: #848484;
    border-color: #848484;
  }
`;
