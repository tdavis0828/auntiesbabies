import styled from 'styled-components';

//Color Palette
const blue = '#1d24ca';
const red = '#d71313';
const white = '#fefbf6';
const green = '#65b741';
const primaryFont = 'Mukta';

export const StyledNavbar = styled.nav`
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${white};
  position: fixed;
  top: 0;
  z-index: 10;
  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    &.logo {
      & img {
        height: 200px;
        width: 200px;
      }
    }
    & p {
      font-family: 'Mukta';
      font-size: 1.25rem;
      &.contact-number {
        background: ${green};
        color: ${white};
        padding: 0.5rem 2rem;
        border-radius: 10px;
      }
    }
    & .nav-link {
      padding: 0.5rem 2rem;
      color: #181818;
      text-decoration: none;
      font-family: 'Mukta';
      font-size: 1.25rem;
      border-radius: 10px;
      margin: 0 0.5rem;
      &.tour {
        background: ${red};
        color: ${white};
      }
      &.registration {
        background: ${blue};
        color: ${white};
      }
    }
  }
`;
export const StyledHome = styled.main`
  width: 100%;
  background: ${white};
`;

export const StyledHero = styled.section`
  height: 65vh;
  width: 100%;
  background: url('https://images.unsplash.com/photo-1444840535719-195841cb6e2b');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  & h2 {
    z-index: 9;
    color: ${white};
    font-family: 'Mukta';
    font-weight: 200;
    font-size: 3rem;
    transform: translateY(100px);
  }
  & .overlay {
    position: absolute;
    top: 0;
    background: rgba(0, 0, 0, 0.15);
    height: 100%;
    width: 100%;
  }
`;

export const StyledHeader = styled.div`
  height: 55px;
  width: 100%;
  background: ${green};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${white};
  font-size: 1.5rem;
  font-family: ${primaryFont};
  font-weight: 200;
`;

export const StyledSectionOne = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & .card {
    height: 350px;
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${white};
    font-family: ${primaryFont};
    border-radius: 10px;
    box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.3);
    margin: 0 2rem;
    & h1 {
      font-weight: 400;
    }
    & p {
      margin: 1rem;
    }
    & img {
      height: 100px;
      width: 100px;
    }
    &.one {
      background: ${red};
    }
    &.two {
      background: ${blue};
    }
    &.three {
      background: ${green};
    }
    &.four {
      background: #f5dd61;
    }
  }
`;

export const StyledMissionStatement = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & div {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    &.image-container {
      justify-content: flex-end;
      & img {
        height: 550px;
        width: 550px;
        border-radius: 50%;
        padding: 1rem;
      }
    }
    &.statement-container {
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      font-size: 1.5rem;
      font-family: ${primaryFont};
      font-weight: 300;
      text-align: left;
      margin-left: 100px;

      & .sub-header {
        margin: 1rem 0;
      }
      & .text {
        width: 50%;
      }
    }
  }
`;

export const StyledImageGallery = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  & .header-container {
    display: flex;
    justify-content: center;
    align-items: center;
    & h2 {
      font-size: 2rem;
      font-family: ${primaryFont};
      font-weight: 300;
    }
  }
  & .gallery-container {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 0.25rem;
    position: relative;
    padding: 2rem;
    & div {
      background: blue;
      & img {
        height: 100%;
        width: 100%;
        margin: auto;
      }
    }
  }

  & h1 {
    position: absolute;
  }
`;

export const StyledReviews = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${primaryFont};
  & .review-header {
    margin: 1rem;
    font-weight: 300;
    font-size: 2rem;
  }
  & .review-container {
    height: 25%;
    width: 65%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${white};
    box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.3);
    margin: 0.75rem 0;
    &.one {
      background: ${red};
      border-radius: 0 20px 20px 20px;
    }
    &.two {
      background: ${blue};
      border-radius: 20px 0 20px 20px;
    }
    &.three {
      background: ${green};
      border-radius: 0 20px 20px 20px;
    }
    & p {
      width: 50%;
      font-size: 1.3rem;
      font-weight: 300;
    }
  }
`;

export const StyledFooter = styled.footer`
  height: 25vh;
  width: 100%;
  background: ${blue};
  color: ${white};
  display: flex;
  justify-content: space-around;
  align-items: center;
  & div {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-left: 1px solid ${white};
    font-family: ${primaryFont};
    text-align: center;
    font-size: 1.15rem;
    & h3 {
      font-weight: 400;
      font-size: 1.35rem;
      text-decoration: underline;
    }
    & a {
      color: ${white};
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
    &:first-child {
      border-left: none;
    }
  }
`;
