/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  NotFoundWrapper,
  AnimatedCar,
  RoadLine,
  Road,
  VendingInteriorStyled,
  TextWrapper,
  VendingExteriorStyled,
  VendingWrapper
} from './styles';

export const NotFound = () => (
  <NotFoundWrapper>
    <TextWrapper>
      {/* <StyledText
        text=" Whoops! "
        variant="header1"
        styles={{ marginTop: '130px' }}
      />
      <StyledText
        text="Looks like that page does not exist."
        variant="header2"
        styles={{ marginTop: '130px' }}
      />
      <Link to="/">
        <Button text="Take me home" />
      </Link> */}
    </TextWrapper>
    <VendingWrapper>
      <VendingInteriorStyled />
    </VendingWrapper>
    <Road>
      {[...Array(Math.round(window.innerWidth / 100))].map((e, i) => (
        <RoadLine key={i} />
      ))}
    </Road>
    <AnimatedCar />
    <VendingWrapper>
      <VendingExteriorStyled />
    </VendingWrapper>
  </NotFoundWrapper>
);
