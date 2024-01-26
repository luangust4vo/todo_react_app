import styled from 'styled-components'

export const TaskInputField = styled.input`
  padding: 10px;
  border: 1px solid #e1dcdc;
  border-radius: 5px;
  font-size: 1em;
  width: 80%;

  &:focus {
    border: 1px solid #426eff;
  }

  @media (min-width: 481px) {
    flex: 1;
  }
`
