import React from "react";
import styled from "styled-components";
import { Tag, Flex, Heading, Image } from "glx-uikit";
import { CommunityTag, CoreTag } from "components/Tags";

export interface ExpandableSectionProps {
  lpLabel?: string;
  multiplier?: string;
  isCommunityFarm?: boolean;
  farmImage?: string;
  tokenSymbol?: string;
}

const Wrapper = styled(Flex)`
  svg {
    margin-right: 4px;
  }
`;

const MultiplierTag = styled(Tag)`
  margin-left: 4px;
`;

const CardHeading: React.FC<ExpandableSectionProps> = ({
  lpLabel,
  multiplier,
  isCommunityFarm,
  farmImage,
  tokenSymbol,
}) => {
  return (
    <Wrapper justifyContent="space-between" alignItems="center" mb="12px">
      <Flex flexDirection="column" alignItems="flex-start">
        <Heading mb="4px" style={{ color: "#ffffff", marginBottom: "30px" }}>
          {lpLabel}
        </Heading>
        <Flex justifyContent="center">
          {/* {isCommunityFarm ? <CommunityTag /> : <CoreTag />}
          <MultiplierTag variant="secondary">{multiplier}</MultiplierTag> */}
        </Flex>
        <Image
          src={`/images/farms/${farmImage}.png`}
          alt={tokenSymbol}
          width={150}
          height={50}
        />
      </Flex>
    </Wrapper>
  );
};

export default CardHeading;
