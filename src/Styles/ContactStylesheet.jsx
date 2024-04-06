import styled from 'styled-components';

//Color Palette
const blue = '#1d24ca';
const red = '#d71313';
const white = '#fefbf6';
const green = '#65b741';
const primaryFont = 'Mukta';

export const StyledContact = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${white};
  & .header {
    height: 45vh;
    width: 100%;
    background: url('https://images.unsplash.com/photo-1617656698728-857894d6343e');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    & p {
      z-index: 9;
      color: ${white};
      font-family: ${primaryFont};
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
  & .container {
    height: 75vh;
    width: 100%;
    display: flex;
    & div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-family: ${primaryFont};
      background: ${white};
    }
    & .info-container {
      height: 100%;
      width: 100%;
      text-align: center;
      font-size: 1.5rem;
      align-items: flex-end;
      & h2 {
        font-weight: 500;
      }
      & p {
        width: 50%;
        font-weight: 300;
        margin: 0;
        &.hours {
          font-size: 1.75rem;
          font-weight: 500;
        }
      }
      & button {
        padding: 1rem 2rem;
        background: ${red};
        color: ${white};
        border-radius: 5px;
        border: none;
        font-family: ${primaryFont};
        font-size: 1.15rem;
        margin-top: 10px;
        cursor: pointer;
        transform: translateX(-150px);
      }
    }
    & .form-container {
      height: 100%;
      width: 100%;
      align-items: center;
      & form {
        height: 75%;
        width: 75%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        & div {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: flex-start;
          & input {
            width: 250px;
            height: 35px;
            margin: 1rem;
            border-radius: 5px;
            outline: none;
            border: none;
            background: #dddddd;
            font-family: ${primaryFont};
            text-align: center;
            &::placeholder {
              text-align: center;
            }
          }
          & textarea {
            height: 175px;
            width: 525px;
            border-radius: 5px;
            outline: none;
            border: none;
            background: #dddddd;
            font-family: ${primaryFont};
            padding-left: 10px;
          }
        }
        & button {
          width: 525px;
          height: 35px;
          margin-top: 1rem;
          background: ${blue};
          color: ${white};
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: all 0.35s ease;
          &:hover {
            background: ${green};
            transition: all 0.35s ease;
          }
        }
      }
    }
  }
`;
