import React from "react";
import styled from "styled-components";
import { useRouteMatch, Link } from "react-router-dom";
import { ButtonMenu, ButtonMenuItem, Text } from "glx-uikit";
import useI18n from "hooks/useI18n";

const FarmTabButtons = () => {
  const { url, isExact } = useRouteMatch();
  const TranslateString = useI18n();

  return (
    <Wrapper>
      <ButtonMenu activeIndex={isExact ? 0 : 1} scale="sm" variant="primary">
        <ButtonMenuItem as={Link} to={`${url}`}>
          <Text
            fontSize="12px"
            color={isExact ? "white" : "primary"}
            style={{ fontSize: 20, fontWeight: 500 }}
          >
            {TranslateString(1198, "Live")}
          </Text>
        </ButtonMenuItem>
        <ButtonMenuItem as={Link} to={`${url}/history`}>
          <Text
            fontSize="12px"
            color={!isExact ? "white" : "primary"}
            style={{ fontSize: 20, fontWeight: 500 }}
          >
            {TranslateString(388, "Finished")}
          </Text>
        </ButtonMenuItem>
        {/* <ToggleWrapper> 
                <Toggle
                  checked={stackedOnly}
                  onChange={() => setStackedOnly(!stackedOnly)}
                  scale="sm"
                />
                <Text > {TranslateString(1116, "Staked only")}</Text>
              </ToggleWrapper> */}
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
