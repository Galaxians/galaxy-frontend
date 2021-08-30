import React, { useState, useRef } from "react";
import { Input } from "glx-uikit";
import styled from "styled-components";

const StyledInput = styled(Input)`
  width: 273px;
  height: 45px;
  background-color: #1e0038 !important;
  border-width: 0px;
  border-style: solid;
  border-color: white;
  box-shadow: 0 0 0 0.5px #ff1fff;
  border-radius: 9px;
  font-size: 20px;
  font-weight: 500;
  @media only screen and (max-width: 620px) {
    width: 100%;
  }
  color: white;
  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: white;
    opacity: 1; /* Firefox */
  }
  
  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: white;
  }
  
  ::-ms-input-placeholder { /* Microsoft Edge */
    color: white;
  }
  @media(max-width: 500px) {
    font-size: 16px;
    height: 30px;
  }
  @media(max-width: 465px) {
    font-size: 12px;
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
          placeholder="Search Farms"
          onBlur={() => setToggled(false)}
        />
      </InputWrapper>
    </Container>
  );
};

export default SearchInput;
