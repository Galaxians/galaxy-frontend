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
  @media (max-width: 500px) {
    width: 60px;
    height: 35px;
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

const TitleText = styled(Text)`
  font-weight: 500;
  font-size: 22px;
  @media (max-width: 500px) {
    font-size: 12px;
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
        <TitleText>{label}</TitleText>
      </div>
    </Container>
  );
};

export default Farm;
