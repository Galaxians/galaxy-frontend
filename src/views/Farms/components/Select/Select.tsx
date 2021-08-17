import React, { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";
import { ArrowDropDownIcon, Text } from "glx-uikit";

const DropDownHeader = styled.div`
  width: 192px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 19px;
  font-size: 20px;
  font-weight: 500;
  box-shadow: ${({ theme }) => theme.shadows.inset};
  border-width: 0px;
  border-style: solid;
  border-color: white;
  box-shadow: 0 0 0 0.5px #ff1fff;
  border-radius: 10px;
  // background: ${({ theme }) => theme.colors.input};
  background-color: #1e0038;
  transition: border-radius 0.15s;
  @media only screen and (max-width: 620px) {
    width: 100%;
  }
`;

const DropDownListContainer = styled.div`
  width: 192px;
  height: 0;
  position: absolute;
  overflow: hidden;
  // background: ${({ theme }) => theme.colors.input};
  background-color: #1e0038;
  border: 0.5px solid #FF1FFF;
  border-radius: 10px;
  z-index: ${({ theme }) => theme.zIndices.dropdown};
  transition: transform 0.15s, opacity 0.15s;
  transform: scaleY(0);
  transform-origin: top;
  font-size: 20px;
  font-weight: 500;
  opacity: 0;

  @media only screen and (max-width: 620px) {
    width: 100%;
  }
`;

const DropDownContainer = styled.div<{
  isOpen: boolean;
  width: number;
  height: number;
}>`
  cursor: pointer;
  width: ${({ width }) => width}px;
  position: relative;
  background: ${({ theme }) => theme.colors.input};
  // border: 0.5px solid #FF1FFF;
  border-radius: 10px;
  height: 45px;
  width: 192px;
  font-size: 20px;
  font-weight: 500;
  @media only screen and (max-width: 620px) {
    width: 100%;
  }

  ${(props) =>
    props.isOpen &&
    css`
      ${DropDownHeader} {
        box-shadow: ${({ theme }) => theme.tooltip.boxShadow};
        border-radius: 10px 10px 0 0;
        width: 192px;
        height: 45px;
        border: 0.5px solid #FF1FFF;
        border-bottom-width: 0px;
      }

      ${DropDownListContainer} {
        height: auto;
        width: 192px;
        transform: scaleY(1);
        opacity: 1;
        border: 0.5px solid #FF1FFF;
        border-top-width: 0;
        border-radius: 0 0 10px 10px;
        box-shadow: ${({ theme }) => theme.tooltip.boxShadow};
      }
    `}

  svg {
    position: absolute;
    right: 0px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  z-index: ${({ theme }) => theme.zIndices.dropdown};
`;

const ListItem = styled.li`
  list-style: none;
  padding: 8px 16px;
  &:hover {
    background: ${({ theme }) => theme.colors.inputSecondary};
  }
`;

export interface SelectProps {
  options: OptionProps[];
  onChange?: (option: OptionProps) => void;
}

export interface OptionProps {
  label: string;
  value: any;
}

const Select: React.FunctionComponent<SelectProps> = ({
  options,
  onChange,
}) => {
  const containerRef = useRef(null);
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (option: OptionProps) => () => {
    setSelectedOption(option);
    setIsOpen(false);

    if (onChange) {
      onChange(option);
    }
  };

  useEffect(() => {
    setContainerSize({
      width: dropdownRef.current.offsetWidth, // Consider border
      height: dropdownRef.current.offsetHeight,
    });
  }, []);

  return (
    <DropDownContainer isOpen={isOpen} ref={containerRef} {...containerSize}>
      {containerSize.width !== 0 && (
        <DropDownHeader onClick={toggling}>
          <Text fontSize="20px" fontWeight="500" >{selectedOption.label}</Text>
        </DropDownHeader>
      )}
      <ArrowDropDownIcon color="text" onClick={toggling} />
      <DropDownListContainer>
        <DropDownList ref={dropdownRef}>
          {options.map((option) =>
            option.label !== selectedOption.label ? (
              <ListItem onClick={onOptionClicked(option)} key={option.label}>
                <Text fontSize="20px" fontWeight="500" >{option.label}</Text>
              </ListItem>
            ) : null
          )}
        </DropDownList>
      </DropDownListContainer>
    </DropDownContainer>
  );
};

export default Select;
