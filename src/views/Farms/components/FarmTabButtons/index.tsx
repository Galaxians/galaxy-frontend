import React from "react";
import styled from "styled-components";
import { useRouteMatch, Link } from "react-router-dom";
import { ButtonMenu, ButtonMenuItem } from "glx-uikit";
import useI18n from "hooks/useI18n";

const FarmTabButtons = () => {
  const { url, isExact } = useRouteMatch();
  const TranslateString = useI18n();

  return (
    <Wrapper>
      <ButtonMenu activeIndex={isExact ? 0 : 1} scale="sm" variant="primary">
        <ButtonMenuItem as={Link} to={`${url}`}>
          {TranslateString(1198, "Live")}
        </ButtonMenuItem>
        <ButtonMenuItem as={Link} to={`${url}/history`}>
          {TranslateString(388, "Finished")}
        </ButtonMenuItem>
      </ButtonMenu>
    </Wrapper>
  );
};

export default FarmTabButtons;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    padding-left: 6px;
    padding-right: 6px;
  }

`;
