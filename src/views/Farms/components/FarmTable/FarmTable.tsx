import React, { useRef } from "react";
import styled from "styled-components";
import { useTable, Button, ChevronUpIcon, ColumnType } from "glx-uikit";
import useI18n from "hooks/useI18n";

import Row, { RowProps } from "./Row";

export interface ITableProps {
  data: RowProps[];
  columns: ColumnType<RowProps>[];
  sortColumn?: string;
}

const Container = styled.div`
  filter: ${({ theme }) => theme.card.dropShadow};
  margin: 0px;
  padding: 0 30px;
  @media (max-width: 700px) {
    padding: unset;
  }
`;

const TableWrapper = styled.div`
  overflow: visible;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledTable = styled.table`
  border-collapse: separate;
  font-size: 14px;
  border-radius: 4px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  color: #ffffff;
  border-spacing: 0 16px;
  @media (max-width: 500px) {
    border-spacing: 0 4px;
  }
`;

const TableBody = styled.tbody`
  & tr {
    border-spacing: 20px 15px;
    td {
      font-size: 16px;
      vertical-align: middle;
    }
  }
`;

const TableContainer = styled.div`
  // position: relative;
}
`;

const ScrollButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const FarmTable: React.FC<ITableProps> = (props) => {
  const tableWrapperEl = useRef<HTMLDivElement>(null);
  const TranslateString = useI18n();
  const { data, columns } = props;

  const { rows } = useTable(columns, data, {
    sortable: true,
    sortColumn: "farm",
  });

  const scrollToTop = (): void => {
    tableWrapperEl.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <TableContainer>
        <TableWrapper ref={tableWrapperEl}>
          <StyledTable>
            <TableBody className="text-white">
              {rows.map((row) => {
                return <Row {...row.original} key={`table-row-${row.id}`} />;
              })}
            </TableBody>
          </StyledTable>
        </TableWrapper>
        <ScrollButtonContainer>
          <Button variant="text" onClick={scrollToTop}>
            {TranslateString(999, "To Top")}
            <ChevronUpIcon color="primary" />
          </Button>
        </ScrollButtonContainer>
      </TableContainer>
    </Container>
  );
};

export default FarmTable;
