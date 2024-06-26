import React from "react";
import styled from "styled-components";
import { Card, CardBody, Heading, Skeleton, Text } from "glx-uikit";
import useI18n from "hooks/useI18n";
import { useGetStats } from "hooks/api";
import { useTotalValue } from "state/hooks";

const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
`;

const TotalValueLockedCard = () => {
  const TranslateString = useI18n();
  const data = useTotalValue();
  // const tvl = data
  //   ? data.total_value_locked_all.toLocaleString("en-US", {
  //       maximumFractionDigits: 0,
  //     })
  //   : null;

  return (
    <StyledTotalValueLockedCard>
      <CardBody>
        <Heading size="lg" mb="24px">
          {TranslateString(762, "Total Value Locked (TVL)")}
        </Heading>
        {data ? (
          <>
            <Heading size="xl">{data.toNumber().toFixed(2)}</Heading>
            <Text color="textSubtle">
              {TranslateString(764, "Across all LPs and Galactic Pools")}
            </Text>
          </>
        ) : (
          <>
            <Skeleton height={66} />
          </>
        )}
      </CardBody>
    </StyledTotalValueLockedCard>
  );
};

export default TotalValueLockedCard;
