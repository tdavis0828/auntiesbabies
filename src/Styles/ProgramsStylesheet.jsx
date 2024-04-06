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
`;
