import React from "react";
import styled from "styled-components";
import { Card, CardBody, Heading, Skeleton, Text } from "glx-uikit";
import useI18n from "hooks/useI18n";
import { useGetStats } from "hooks/api";
import { useTotalValue } from "state/hooks";

const StyledTotalValueLockedCard = styled(Card)`
  background: rgba(0,0,0,0);
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  min-width: 360px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: left;
  border: 1px solid #61319F;
  border-radius: 8px;
  padding: 10px 22px;
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
      <Text fontSize="35px" color="#ff1fff" fontWeight="900" >
        {TranslateString(762, "Total Value Locked")}
      </Text>
      {data ? (
        <>
          <Text fontWeight="700" fontSize="40px">{data.toNumber().toFixed(2)}</Text>
          <Text fontWeight="300" fontSize="20px" color="contrast">
            {TranslateString(764, "Across all LPs and Galactic Pools")}
          </Text>
        </>
      ) : (
        <>
          <Skeleton height={66} />
        </>
      )}
    </StyledTotalValueLockedCard>
  );
};

export default TotalValueLockedCard;
