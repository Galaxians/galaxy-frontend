import React from "react";
import { useTheme } from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  const primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
  const secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";

  return (
    <Svg viewBox="0 0 32 32" {...props}>
  <g id="Profile" transform="translate(-12 -12)">
    <circle id="Ellipse_96" data-name="Ellipse 96" cx="16" cy="16" r="16" transform="translate(12 12)" fill="#f5f5f5"/>
    <g id="Symbol_6_1" data-name="Symbol 6 – 1" transform="translate(20 20)">
      <g id="Union_1" data-name="Union 1" transform="translate(0 -354)">
        <circle id="Ellipse_3" data-name="Ellipse 3" cx="4" cy="4" r="4" transform="translate(4 354)" fill="#707070"/>
        <path id="Path_6" data-name="Path 6" d="M8,10c-4.4,0-8,1.8-8,4v2H16V14C16,11.8,12.4,10,8,10Z" transform="translate(0 354)" fill="#707070"/>
      </g>
    </g>
  </g>
    </Svg>
  );
};

export default Icon;
