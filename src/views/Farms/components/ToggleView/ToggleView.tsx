import React from "react";
import styled from "styled-components";
import { CardViewIcon, IconButton } from "glx-uikit";
import { ViewMode } from "../types";

interface ToogleViewProps {
  viewMode: ViewMode;
  onToggle: (mode: ViewMode) => void;
}
interface ListViewIconProps {
  color: string;
}

const ListViewIcon: React.FunctionComponent<ListViewIconProps> = ({
  color,
}) => {
  return (
    <svg viewBox="0 0 24 24" color="green" width="20px" xmlns="http://www.w3.org/2000/svg">
      <g id="Group_521" data-name="Group 521" transform="translate(-606 -366.788)">
        <rect id="Rectangle_281" data-name="Rectangle 281" width="24" height="24" transform="translate(606 366.788)" fill="#fff" opacity="0" />
        <g id="Group_520" data-name="Group 520" transform="translate(1 0.131)">
          <rect id="Rectangle_170" data-name="Rectangle 170" width="4" height="13" rx="2" transform="translate(627 371.657) rotate(90)" fill={color} />
          <rect id="Rectangle_171" data-name="Rectangle 171" width="4" height="13" rx="2" transform="translate(627 376.657) rotate(90)" fill={color} />
          <rect id="Rectangle_172" data-name="Rectangle 172" width="4" height="13" rx="2" transform="translate(627 381.657) rotate(90)" fill={color} />
          <rect id="Rectangle_173" data-name="Rectangle 173" width="4" height="5" rx="2" transform="translate(613 371.657) rotate(90)" fill={color} />
          <rect id="Rectangle_174" data-name="Rectangle 174" width="4" height="5" rx="2" transform="translate(613 376.657) rotate(90)" fill={color} />
          <rect id="Rectangle_175" data-name="Rectangle 175" width="4" height="5" rx="2" transform="translate(613 381.657) rotate(90)" fill={color} />
        </g>
      </g>
    </svg>
  );
};

const Container = styled.div`
  margin-left: -8px;
  ${({ theme }) => theme.mediaQueries.sm} {
    margin-left: 0;
  }
`;

const ToggleView: React.FunctionComponent<ToogleViewProps> = ({
  viewMode,
  onToggle,
}) => {
  const handleToggle = (mode: ViewMode) => {
    if (viewMode !== mode) {
      onToggle(mode);
    }
  };

  return (
    <Container>
      <IconButton
        variant="text"
        scale="sm"
        onClick={() => handleToggle(ViewMode.CARD)}
      >
        <CardViewIcon
          color={viewMode === ViewMode.CARD ? "primary" : "textDisabled"}
        />
      </IconButton>
      <IconButton
        variant="text"
        scale="sm"
        onClick={() => handleToggle(ViewMode.TABLE)}
      >
        <ListViewIcon
          color={viewMode === ViewMode.TABLE ? "#ff1fff" : "#666171"}
        />
      </IconButton>
    </Container>
  );
};

export default ToggleView;
