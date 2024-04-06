import styled from 'styled-components';

const blue = '#1d24ca';
const red = '#d71313';
const white = '#fefbf6';
const green = '#65b741';
const primaryFont = 'Mukta';

export const StyledTour = styled.main`
  height: 100vh;
  width: 100%;
  background: ${white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${primaryFont};
  & .header {
    height: 45vh;
    width: 100%;
    background: url('https://images.unsplash.com/photo-1567746455504-cb3213f8f5b8');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${white};
    position: relative;
    & p {
      z-index: 9;
      font-size: 4rem;
      font-weight: 200;
    }
    & .overlay {
      height: 100%;
      width: 100%;
      background: rgba(0, 0, 0, 0.25);
      position: absolute;
      top: 0;
    }
  }
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
