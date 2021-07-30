import styled from 'styled-components'

const Pane = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 20px;
`

export default Pane
