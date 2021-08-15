import React, { useState, useRef } from "react";
import { Input } from "glx-uikit";
import styled from "styled-components";

const StyledInput = styled(Input)`
  width: 273px;
  height: 45px;
  background-color: #1e0038 !important;
  border: 1px solid #FF1FFF;
  border-radius: 9px;

  @media only screen and (max-width: 620px) {
    width: 100%;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 300px;
    display: block;
  }
`;

const Container = styled.div<{ toggled: boolean }>``;

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<Props> = ({ value, onChange }) => {
  const [toggled, setToggled] = useState(false);
  const inputEl = useRef(null);

  return (
    <Container toggled={toggled}>
      <InputWrapper>
        <StyledInput
          ref={inputEl}
          value={value}
          onChange={onChange}
          placeholder="Search farms"
          onBlur={() => setToggled(false)}
        />
      </InputWrapper>
    </Container>
  );
};

export default SearchInput;
