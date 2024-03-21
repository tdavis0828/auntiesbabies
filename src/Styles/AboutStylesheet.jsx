import styled from 'styled-components';

//Color Palette
const blue = '#1d24ca';
const red = '#d71313';
const white = '#fefbf6';
const green = '#65b741';
const primaryFont = 'Mukta';

export const StyledAbout = styled.main`
  height: 100vh;
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
    & img {
      height: 450px;
      width: 350px;
      border-radius: 50%;
    }
  }
`;
