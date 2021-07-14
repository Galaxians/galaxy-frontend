import React from "react";
import { useTheme } from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  const primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
  const secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";

  return (
    <Svg viewBox="0 0 46 46" {...props}>
  <g id="Group_522" data-name="Group 522" transform="translate(-1809 -27)">
    <circle id="Ellipse_33" data-name="Ellipse 33" cx="23" cy="23" r="23" transform="translate(1809 27)" fill="#fff"/>
    <g id="Group_141" data-name="Group 141" transform="translate(1537.885 292.924)">
      <path id="Path_100" data-name="Path 100" d="M294.718-256.077c-1.53,0-14.351.628-14.351,13.71,0,5.68,10.339,13.59,13.46,14.926a2.265,2.265,0,0,0,1.783,0c3.121-1.335,13.458-9.141,13.46-14.926C309.072-255.449,296.248-256.077,294.718-256.077Z" fill="#440c8b" opacity="0.524"/>
      <ellipse id="Ellipse_35" data-name="Ellipse 35" cx="4.433" cy="5.503" rx="4.433" ry="5.503" transform="translate(281.789 -244.217) rotate(-30)" fill="#fff"/>
      <ellipse id="Ellipse_36" data-name="Ellipse 36" cx="5.503" cy="4.433" rx="5.503" ry="4.433" transform="translate(294.383 -239.118) rotate(-60)" fill="#fff"/>
      <path id="Path_101" data-name="Path 101" d="M367.242-68.941a.314.314,0,0,1,.418-.433,8.181,8.181,0,0,0,3.563.977,7.21,7.21,0,0,0,3.376-.958.314.314,0,0,1,.431.416,4.389,4.389,0,0,1-3.807,2.747A4.761,4.761,0,0,1,367.242-68.941Z" transform="translate(-76.415 -164.269)" fill="#fff"/>
    </g>
  </g>
    </Svg>
  );
};

export default Icon;
