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
    }
    & .info-container {
      height: 100%;
      width: 100%;
      text-align: center;
      font-size: 1.5rem;
      align-items: center;
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
      & a {
        padding: 1rem 2rem;
        background: ${red};
        color: ${white};
        border-radius: 5px;
        border: none;
        font-family: ${primaryFont};
        font-size: 1.15rem;
        margin-top: 10px;
        text-decoration: none;
        cursor: pointer;
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
  @media (max-width: 1024px) {
    & .container {
      & .info-container {
        font-size: 1.1rem;
        & a {
          font-size: 1.1rem;
        }
      }
      & .form-container {
        & form {
          & div {
            & input {
              width: 200px;
            }
            & textarea {
              width: 420px;
              height: 125px;
            }
          }
          & button {
            width: 420px;
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    & .container {
      height: 100vh;
      flex-direction: column;
      & .form-container {
        & form {
          & button {
            height: 100px;
          }
        }
      }
    }
  }

  @media (max-width: 425px) {
    height: 200vh;
    & .header {
      position: absolute;
      top: 0;
    }
    & .container {
      & .info-container {
        justify-content: flex-start;

        & p {
          width: 85%;
        }
      }
      & .form-container {
        & form {
          & div {
            flex-direction: column;
            justify-content: flex-start;

            & input {
              width: 300px;
            }
            & textarea {
              width: 300px;
              height: 100px;
            }
          }
          & button {
            width: 300px;
            font-size: 1rem;
            padding: 1rem;
          }
        }
      }
    }
  }
  @media (max-width: 375px) {
    & .container {
      height: 120vh;
      & .form-container {
        & form {
          & div {
            flex-direction: column;
            & input {
              width: 275px;
            }
            & textarea {
              width: 275px;
              height: 100px;
            }
          }
          & button {
            width: 275px;
            font-size: 1rem;
            padding: 0.5rem;
          }
        }
      }
    }
  }
`;
