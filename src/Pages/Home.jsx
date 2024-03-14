import React from 'react';
import { StyledHome } from '../Styles/HomeStyleSheet';
import Hero from '../Components/Hero';
import Header from '../Components/Header';
import AgeRange from '../Components/AgeRange';
import MissionStatement from '../Components/MissionStatement';
import ImageGallery from '../Components/ImageGallery';
import Reviews from '../Components/Reviews';

function Home() {
  return (
    <StyledHome>
      <Hero />
      <Header />
      <MissionStatement />
      <AgeRange />
      <ImageGallery />
      <Reviews />
    </StyledHome>
  );
}

export default Home;
