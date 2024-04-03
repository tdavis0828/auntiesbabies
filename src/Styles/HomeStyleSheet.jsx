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
  position: sticky;
  top: 0;
  z-index: 10;
  background: ${white};
  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    &.open-btn-container {
      display: none;
    }
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

  @media (max-width: 1024px) {
    & div {
      &.logo {
        & img {
          height: 150px;
          width: 150px;
          margin-left: 10px;
        }
      }
      & .nav-link {
        padding: 0.25rem 1rem;
        font-size: 1rem;
      }
      & p {
        font-size: 1rem;
        &.contact-number {
          padding: 0.25rem 1rem;
        }
      }
    }
  }
  @media (max-width: 768px) {
    width: 200px;
    height: 100vh;
    flex-direction: column;
    transform: translateX(-200px);
    transition: all 0.35s ease;
    position: fixed;
    &.open {
      transition: all 0.35s ease;
      transform: translateX(0);
    }
    & div {
      height: 100%;
      flex-direction: column;
      justify-content: space-around;
      &.open-btn-container {
        display: block;
        background: ${white};
        height: 45px;
        width: 45px;
        position: absolute;
        top: 10px;
        right: -77px;
        padding: 1rem;
        border-radius: 0 5px 5px 0;
        & img {
          height: 45px;
          width: 45px;
        }
      }
      &.close-btn-container {
        height: 20%;
        & .close-btn {
          background: none;
          border: none;
          font-size: 1.25rem;
          font-family: ${primaryFont};
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;

export const StyledHome = styled.main`
  width: 100%;
`;

export const StyledHero = styled.section`
  height: 45vh;
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
  }
  & .overlay {
    position: absolute;
    top: 0;
    background: rgba(0, 0, 0, 0.15);
    height: 100%;
    width: 100%;
  }
`;

export const StyledBanner = styled.div`
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

export const StyledAgeRange = styled.div`
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
    position: relative;
    overflow: hidden;
    & .back {
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transform: translateY(350px);
      transition: all 0.25s ease-in;
      & p {
        font-size: 1.35rem;
        width: 60%;
      }
      &.open {
        transition: all 0.25s ease-in;
        transform: translateY(0);
      }
    }
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
      & .back {
        background: ${red};
      }
    }
    &.two {
      background: ${blue};
      & .back {
        background: ${blue};
      }
    }
    &.three {
      background: ${green};
      & .back {
        background: ${green};
      }
    }
    &.four {
      background: #ffc94a;
      & .back {
        background: #ffc94a;
      }
    }
  }
  @media (max-width: 1024px) {
    & .card {
      & h1 {
        font-size: 1.65rem;
      }
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
      font-size: 1.35rem;
      font-family: ${primaryFont};
      font-weight: 300;
      text-align: left;
      margin-left: 100px;
      & .text {
        margin: 10px 0;
        width: 50%;
      }
    }
  }
  @media (max-width: 1024px) {
    div {
      &.image-container {
        & img {
          height: 400px;
          width: 400px;
        }
      }
      &.statement-container {
        margin-left: 50px;
        font-size: 1.25rem;
        & .sub-header {
          margin: 0.5rem 0;
        }
        & .text {
          width: 65%;
        }
      }
    }
  }
  @media (max-width: 768px) {
    div {
      &.image-container {
        & img {
          height: 350px;
          width: 350px;
        }
      }
      &.statement-container {
        font-size: 1.15rem;
        & .header {
          margin: 0;
        }
        & .sub-header {
          ${'' /* margin: 0; */}
        }
        & .text {
          margin: 0;
        }
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
    height: 30%;
    width: 50%;
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
      font-size: 1.2rem;
      font-weight: 300;
      margin: 0;
    }
  }
  @media (max-width: 1024px) {
    height: 120vh;
    & .review-container {
      width: 75%;
      height: 25%;
    }
  }
`;

export const StyledFooter = styled.footer`
  height: 25vh;
  width: 100%;
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
    &.one {
      background: ${red};
      color: ${white};
      border-top: 2px solid ${red};
      border-right: 2px solid ${red};
    }
    &.two {
      border-top: 2px solid ${blue};
      border-left: 2px solid ${blue};

      background: ${blue};
      color: ${white};
    }
    &.three {
      border-top: 2px solid ${green};
      border-left: 2px solid ${blue};
      background: ${green};
      color: ${white};
    }
    & p {
      margin: 0;
    }
    & h3 {
      font-weight: 400;
      font-size: 1.35rem;
      text-decoration: underline;
      margin: 0;
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
  @media (max-width: 1024px) {
    & div {
      font-size: 0.95rem;
      &.one {
        & p {
          &.address {
            width: 80%;
          }
        }
      }
    }
  }
`;
