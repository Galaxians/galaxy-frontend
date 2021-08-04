import React from "react";
import styled from "styled-components";
import { useRouteMatch, Link } from "react-router-dom";
import { ButtonMenu, ButtonMenuItem } from "glx-uikit";
import useI18n from "hooks/useI18n";

const FarmTabButtons = () => {
  const { url, isExact } = useRouteMatch();
  const TranslateString = useI18n();

  const exchangeurl = "https://exchange.galaxyswap.net/";

  // to={`${exchangeurl}`}

  return (
    <Wrapper>
      <ButtonMenu activeIndex={isExact ? 1 : 2} scale="sm" variant="subtle">
        <ButtonMenuItem as="a" href={exchangeurl}>
          {TranslateString(1198, "Swap")}
        </ButtonMenuItem>
        <ButtonMenuItem as={Link} to={`${url}`}>
          {TranslateString(388, "Live")}
        </ButtonMenuItem>
        <ButtonMenuItem as={Link} to={`${url}/history`}>
          {TranslateString(388, "Discontinued")}
        </ButtonMenuItem>
      </ButtonMenu>
    </Wrapper>
  );
};

export default FarmTabButtons;

const Wrapper = styled.div`
  display: flex;
  justify-content: left;
  align-items: left;
  margin-top:15px;
  margin-bottom:15px;

  a {
    padding-left: 12px;
    padding-right: 12px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-left: 30px;
  }
`;
