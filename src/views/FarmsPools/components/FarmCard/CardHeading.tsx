import React from "react";
import styled from "styled-components";
import { Tag, Flex, Heading, Image } from "glx-uikit";

export interface ExpandableSectionProps {
  lpLabel?: string;
  multiplier?: string;
  isCommunityFarm?: boolean;
  farmImage?: string;
  tokenSymbol?: string;
}

const Wrapper = styled.div`
  margin: 0 26px;

  svg {
    margin-right: 4px;
  }
`;

const HeadingImage = styled.img`
  width: auto;
  height: 60px;
`;

const CardHeading: React.FC<ExpandableSectionProps> = ({
  lpLabel,
  multiplier,
  isCommunityFarm,
  farmImage,
  tokenSymbol,
}) => {
  return (
    <Wrapper>
      <div style={{ textAlign: "left" }}>
        <Heading
          mb="18px"
          style={{
            fontSize: 27,
            fontWeight: 800,
            color: "#ffffff",
          }}
        >
          {lpLabel}
        </Heading>
        <div>
          <HeadingImage
            src={`/images/farms/${farmImage}.png`}
            alt={tokenSymbol}
            height={60}
            width="auto"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default CardHeading;
