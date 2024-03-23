import styled from 'styled-components';

const blue = '#1d24ca';
const red = '#d71313';
const white = '#fefbf6';
const green = '#65b741';
const primaryFont = 'Mukta';

export const StyledTour = styled.main`
  height: 80vh;
  width: 100%;
  background: ${white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${primaryFont};
  & form {
    padding: 3rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    & div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &.child-info {
        flex-direction: row;
        & input {
          width: 325px;
        }
      }
      & input {
        height: 35px;
        width: 400px;
        margin: 0.5rem;
        text-align: center;
        border-radius: 5px;
        border: none;
        background: #dddddd;
        &.childAge {
          width: 55px;
        }
        &.date {
          font-family: ${primaryFont};
        }
        &.cert {
          width: 15px;
          height: 15px;
          margin: none;
        }
      }
      & .comments {
        height: 150px;
        width: 400px;
        font-family: ${primaryFont};
        background: #dddddd;
        border: none;
        border-radius: 5px;
        padding-left: 10px;
      }
    }

    & button {
      margin-top: 1rem;
      padding: 0.5rem 1rem;
      font-family: ${primaryFont};
      font-size: 1.15rem;
      border-radius: 5px;
      border: none;
      background: ${green};
      color: ${white};
      cursor: pointer;
    }
  }
`;
