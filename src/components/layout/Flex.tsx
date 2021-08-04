import styled from "styled-components";

const FlexLayout = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  & > * {
    margin-bottom: 32px;
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    & > div {
      width: 100%;
    }
  }
`;

export default FlexLayout;
