import styled from 'styled-components';

//Color Palette
const blue = '#1d24ca';
const red = '#d71313';
const white = '#fefbf6';
const green = '#65b741';
const primaryFont = 'Mukta';

export const StyledRegistration = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: ${primaryFont};
  background: ${white};
  & .header {
    height: 45vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background: url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    & .overlay {
      position: absolute;
      top: 0;
      height: 100%;
      width: 100%;
      background: rgba(0, 0, 0, 0.25);
    }
    & p {
      font-size: 4rem;
      font-weight: 200;
      color: ${white};
      z-index: 9;
    }
  }
  & .form-container {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & form {
      height: 100%;
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      & div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 1rem;
        & input,
        select {
          margin: 5px;
          width: 400px;
          height: 30px;
          border-radius: 5px;
          border: none;
          font-family: ${primaryFont};
          font-size: 1.1rem;
          background: #dddddd;
          text-align: center;
          font-weight: 300;
        }
        & fieldset {
          text-align: center;
          display: flex;
          flex-direction: column;
          margin: 10px;
          & input {
            width: 30px;
            height: 15px;
            margin: 0;
          }
        }
      }

      & button {
        width: 400px;
        height: 35px;
        border-radius: 5px;
        background: ${red};
        border: none;
        color: ${white};
        font-family: ${primaryFont};
        font-size: 1.35rem;
        transition: all 0.35s ease;
        cursor: pointer;
        &:hover {
          background: ${green};
          transition: all 0.35s ease;
        }
      }
    }
  }
  @media (max-width: 425px) {
    & .form-container {
      & form {
        & div {
          & input,
          select {
            width: 350px;
          }
        }
        & button {
          width: 350px;
        }
      }
    }
  }

  @media (max-width: 375px) {
    & .form-container {
      & form {
        & div {
          & input,
          select {
            width: 300px;
            font-size: 1rem;
          }
        }
        & button {
          width: 300px;
        }
      }
    }
  }
  @media (max-width: 320px) {
    & .form-container {
      & form {
        & div {
          & input,
          select {
            width: 250px;
          }
        }
        & button {
          width: 250px;
        }
      }
    }
  }
`;
