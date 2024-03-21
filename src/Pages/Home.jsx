import React from 'react';
import { StyledHome } from '../Styles/HomeStyleSheet';
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import AgeRange from '../Components/AgeRange';
import MissionStatement from '../Components/MissionStatement';
import ImageGallery from '../Components/ImageGallery';
import Reviews from '../Components/Reviews';

function Home() {
  return (
    <StyledHome>
      <Hero />
      <Banner />
      <MissionStatement />
      <AgeRange />
      <ImageGallery />
      <Reviews />
    </StyledHome>
  );
}

export default Home;
