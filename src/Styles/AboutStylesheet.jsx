import styled from 'styled-components';

//Color Palette
const blue = '#1d24ca';
const red = '#d71313';
const white = '#fefbf6';
const green = '#65b741';
const primaryFont = 'Mukta';

export const StyledAbout = styled.main`
  height: 100%;
  width: 100%;
  background: ${white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${primaryFont};
  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;
    &.header {
      background: url('https://images.unsplash.com/photo-1540479859555-17af45c78602');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      height: 45vh;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: ${primaryFont};
      position: relative;
      & p {
        font-family: ${primaryFont};
        color: ${white};
        font-size: 4rem;
        font-weight: 300;
        z-index: 9;
      }
      & .overlay {
        position: absolute;
        top: 0;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.25);
        margin: 0;
      }
    }
    &.content-container {
      width: 40%;
      font-size: 1.15rem;
      font-family: ${primaryFont};
      &:last-child {
        padding-bottom: 5rem;
      }
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
`;
