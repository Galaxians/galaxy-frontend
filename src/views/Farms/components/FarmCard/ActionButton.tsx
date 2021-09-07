import styled from "styled-components";
import { Button } from "glx-uikit";

export default styled(Button)`
  border-radius: 8px;
  height: unset;
  font-weight: 900;
  font-size: 14px;
  padding: 8px 39px;
  color: #ffe4f2;
  letter-spacing: 0;
  line-height: 18px;

  &:hover {
    color: #ffe3f2 !important;
  }
`;
