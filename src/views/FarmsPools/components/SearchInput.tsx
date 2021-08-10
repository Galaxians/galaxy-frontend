import React, { useState, useRef } from "react";
import { Input } from "glx-uikit";
import styled from "styled-components";

const StyledInput = styled(Input)`
  border-radius: 4px;
  margin-left: auto;
  background-color: #1e0038 !important;
`;

const InputWrapper = styled.div`
  position: relative;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 234px;
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
