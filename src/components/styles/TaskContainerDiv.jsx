import styled from 'styled-components'

export const TaskContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 30px;
  align-self: center;
  width: 90%;
  height: 50%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 481px) {
    width: 70%;
  }

  @media (min-width: 769px) {
    &::-webkit-scrollbar {
      display: block;
      width: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #888;
      border-radius: 5px;
    }

    &::-webkit-scrollbar-track {
      background-color: #f0f0f0;
      border-radius: 5px;
    }
  }
`
