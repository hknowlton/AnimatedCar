/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import {
  NotFoundWrapper,
  AnimatedCar,
  RoadLine,
  Road,
  VendingInteriorStyled,
  TextWrapper,
  VendingExteriorStyled
} from './styles';

function useWindowSize() {
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getSize, isClient]); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}

export const NotFound = () => {
  const size = useWindowSize();
  return (
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
      <VendingInteriorStyled />
      <Road>
        {[...Array(Math.round(size.width / 100))].map((e, i) => (
          <RoadLine key={i} />
        ))}
      </Road>
      <AnimatedCar />
      <VendingExteriorStyled />
    </NotFoundWrapper>
  );
};
