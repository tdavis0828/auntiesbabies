import styled from 'styled-components';

//Color Palette
const blue = '#1d24ca';
const red = '#d71313';
const white = '#fefbf6';
const green = '#65b741';
const primaryFont = 'Mukta';

export const StyledAbout = styled.main`
  height: 240vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${primaryFont};
  position: relative;
  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &.header {
      background: url('https://images.unsplash.com/photo-1650504149601-f9fdd445c187');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      height: 45vh;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: ${primaryFont};
      position: absolute;
      top: 0;
      & p {
        font-family: ${primaryFont};
        color: ${white};
        font-size: 4rem;
        font-weight: 200;
        z-index: 9;
      }
      & .overlay {
        position: absolute;
        top: 0;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.45);
        margin: 0;
      }
    }
    &.image-container {
      margin-top: 60px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      & h4 {
        margin: 0;
        font-size: 1.5rem;
      }
      & p {
        margin: 0;
      }
    }
    &.content-container {
      width: 40%;
      font-size: 1.15rem;
      font-family: ${primaryFont};
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
    }
    & h1 {
      font-weight: 400;
    }
    & img {
      height: 450px;
      width: 350px;
      border-radius: 50%;
    }
  }

  @media (max-width: 768px) {
    & div {
      &.header {
        position: absolute;
        top: 0;
      }
      &.image-container {
        & img {
          height: 350px;
          width: 275px;
        }
        & h4 {
          margin: 10px 0;
          font-size: 1.5rem;
        }
        & p {
          margin: 0;
        }
      }
      &.content-container {
        width: 70%;
      }
    }
  }
  @media (max-width: 425px) {
    height: 375vh;
    & div {
      &.content-container {
        text-align: center;
        width: 85%;
      }
    }
  }
  @media (max-width: 375px) {
    & div {
      &.image-container {
        & img {
          height: 300px;
          width: 225px;
        }
      }
      &.content-container {
        width: 80%;
        font-size: 1.1rem;
        & h1 {
          margin: 0;
        }
      }
    }
  }
`;
