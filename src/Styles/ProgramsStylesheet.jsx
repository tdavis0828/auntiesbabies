import styled from 'styled-components';

//Color Palette
const blue = '#1d24ca';
const red = '#d71313';
const white = '#fefbf6';
const green = '#65b741';
const primaryFont = 'Mukta';

export const StyledPrograms = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & .header {
    height: 45vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${white};
    position: relative;
    background: url('https://images.unsplash.com/photo-1605627079912-97c3810a11a4');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    font-family: ${primaryFont};
    & .overlay {
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      background: rgba(0, 0, 0, 0.25);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    & p {
      z-index: 9;
      font-size: 4rem;
      font-weight: 200;
    }
  }
  & .text-container {
    height: 35vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: ${primaryFont};
    font-size: 1.25rem;
    & p {
      width: 50%;
    }
    &.one {
      text-align: center;
    }
    &.two {
      flex-direction: row;
      & p {
        width: 80%;
      }
    }
    &.three {
      height: 30vh;
      position: relative;
      & h4 {
        position: absolute;
        top: 0;
      }
      & p {
        width: 90%;
      }
      flex-direction: row;
    }
    &.four {
      height: 35vh;
      text-align: center;
      & h4 {
        margin: 0;
      }
      & p {
        width: 50%;
      }
    }
    &.five {
      height: 30vh;
      flex-direction: row;
      position: relative;
      & h4 {
        position: absolute;
        top: 0;
        margin: 0;
      }
    }
  }
`;
