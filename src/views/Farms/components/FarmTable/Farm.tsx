import React from "react";
import styled from "styled-components";
import { useFarmUser } from "state/hooks";
import useI18n from "hooks/useI18n";
import { Text, Image } from "glx-uikit";
import { getBalanceNumber } from "utils/formatBalance";

export interface FarmProps {
  label: string;
  pid: number;
  image: string;
}

const IconImage = styled(Image)`
  width: 80px;
  height: 40px;

  ${({ theme }) => theme.mediaQueries.sm} {
    width: 80px;
    height: 40px;
  }
`;

const Container = styled.div`
  padding-left: 16px;
  display: flex;
  align-items: center;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-left: 32px;
  }
`;

const Farm: React.FunctionComponent<FarmProps> = ({ image, label, pid }) => {
  const { stakedBalance } = useFarmUser(pid);
  const TranslateString = useI18n();
  const rawStakedBalance = getBalanceNumber(stakedBalance);

  const handleRenderFarming = (): JSX.Element => {
    if (rawStakedBalance) {
      return (
        <Text color="secondary" fontSize="12px" bold>
          {TranslateString(999, "FARMING")}
        </Text>
      );
    }

    return null;
  };

  return (
    <Container>
      <IconImage
        src={`/images/farms/${image}.png`}
        alt="icon"
        width={80}
        height={40}
        mr="24px"
      />
      <div>
        {handleRenderFarming()}
        <Text fontSize="22px" fontWeight="500">{label}</Text>
      </div>
    </Container>
  );
};

export default Farm;
