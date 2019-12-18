import styled, { keyframes } from 'styled-components';
import Car from './Car';
import theme from './theme';
import VendingInterior from './VendingInterior';
import media from './media';
import VendingExterior from './VendingExterior';

const driveFullScreen = keyframes`
    0% { left: -365px; }
    70% { left: 70%; }
    100% { left: 100%; }
`;

const pulse = keyframes`
    0% { opacity: 0.6; }
    50% { opacity: 1; }
    100% { opacity: 0.6; }
`;

const bounce = keyframes`
    0%, 20%, 50%, 100% {transform: translateY(0);} 
    40% {transform: translateY(-5px);} 
    60% {transform: translateY(-3px);} 
    80% {transform: translateY(-5px);} 
`;

const flickerOne = keyframes`
  0% {
    opacity:0.1;
    text-shadow: 0px 0px 29px rgba(254,185,72, 1);
  }
  2% {
    opacity:0.1;
    text-shadow: 0px 0px 29px rgba(254,185,72, 1);
  }
  4% {
    opacity:1;
    text-shadow: 0px 0px 29px rgba(254,185,72, 1);
  }
  19% {
    opacity:1;
    text-shadow: 0px 0px 29px rgba(254,185,72, 1);
  }
  21% {
    opacity:0.1;
    text-shadow: 0px 0px 29px rgba(254,185,72, 1);
  }
  23% {
    opacity:1;
    text-shadow: 0px 0px 29px rgba(254,185,72, 1);
  }
  
  80% {
    opacity:1;
    text-shadow: 0px 0px 29px rgba(254,185,72, 1);
  }
  83% {
    opacity:0.4;
    text-shadow: 0px 0px 29px rgba(254,185,72, 1);
  }
  87% {
    opacity:1;
    text-shadow: 0px 0px 29px rgba(254,185,72, 1);
  }
`;

const borderFlicker = keyframes`
   0% {
    opacity:0.1;
    -webkit-box-shadow: 0px 0px 78px 4px rgba(255,255,255,0.73);
    -moz-box-shadow: 0px 0px 78px 4px rgba(255,255,255,0.73);
    box-shadow: 0px 0px 78px 4px rgba(255,255,255,0.73);
  }
  2% {
    opacity:1;
    -webkit-box-shadow: 0px 0px 78px 4px rgba(255,255,255,0.73);
    -moz-box-shadow: 0px 0px 78px 4px rgba(255,255,255,0.73);
    box-shadow: 0px 0px 78px 4px rgba(255,255,255,0.73);
  }
  4% {
    opacity:0.1;
    -webkit-box-shadow: 0px 0px 78px 4px rgba(255,255,255,0.73);
    -moz-box-shadow: 0px 0px 78px 4px rgba(255,255,255,0.73);
    box-shadow: 0px 0px 78px 4px rgba(255,255,255,0.73);
  }
  
  8% {
    opacity:1;
    -webkit-box-shadow: 0px 0px 78px 4px rgba(255,255,255,0.73);
    -moz-box-shadow: 0px 0px 78px 4px rgba(255,255,255,0.73);
    box-shadow: 0px 0px 78px 4px rgba(255,255,255,0.73);
  }
  70% {
    opacity:0.7;
    -webkit-box-shadow: 0px 0px 78px 4px rgba(255,255,255,0.73);
    -moz-box-shadow: 0px 0px 78px 4px rgba(255,255,255,0.73);
    box-shadow: 0px 0px 78px 4px rgba(255,255,255,0.73);
  }
  100% {
    opacity:1;
    -webkit-box-shadow: 0px 0px 78px 4px rgba(255,255,255,0.73);
    -moz-box-shadow: 0px 0px 78px 4px rgba(255,255,255,0.73);
    box-shadow: 0px 0px 78px 4px rgba(255,255,255,0.73);
  }
}
`;

export const AnimatedCar = styled(Car)`
  display: inline-block;
  position: absolute;
  animation: ${driveFullScreen} 8s infinite ease;
  bottom: 0;
  .halo {
    animation: ${pulse} infinite 1s ease-in-out;
  }
  .wheel {
    animation: ${bounce} infinite 2s linear;
  }
`;

export const NotFoundWrapper = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  height: calc(100vh - 112px);
  width: 100%;
`;

export const TextWrapper = styled.div`
  padding: 20px;
  ${media.sm`text-align: center`};
`;

export const Road = styled.div`
  background-color: ${theme.carvana.gray.dark};
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 40px;
  ${media.med` height: 50px;`};
  ${media.lg` height: 50px;`};
  display: flex;
  justify-content: space-around;
`;

export const RoadLine = styled.div`
  width: 30px;
  background-color: ${theme.carvana.yellow.primary};
  height: 7px;
  ${media.med` height: 10px;`};
  ${media.lg` height: 10px;`};
  border-radius: 3px;
  top: 15px;
  position: relative;
`;

export const VendingInteriorStyled = styled(VendingInterior)`
  position: absolute;
  bottom: -5px;
  right: 0;
`;

export const VendingWallDecor = styled.div`
  top: 68px;
  left: 30px;
  ${media.med`top: 50px;`};
  ${media.lg`top: 50px;`};
  position: absolute;
  display: flex;
  width: 90%;
  justify-content: space-around;

  div {
    width: 40px;
    height: 40px;
    ${media.med`width: 60px; height: 60px;`};
    ${media.lg`width: 80px; height: 80px;`};
    border: 1px solid ${theme.carvana.gray.medium};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .photoOne {
    background-image: url('/Partner1.png');
  }
  .photoTwo {
    background-image: url('/Partner2.png');
  }
  .photoThree {
    background-image: url('/Partner3.png');
  }
`;

export const VendingExteriorWrapper = styled.svg`
  width: 220px;
  height: 200px;
  ${media.med`width: 340px;height: 300px;`};
  ${media.lg`width: 460px;height: 400px;`};
`;

export const CarWrapper = styled.svg`
  width: 200px;
  height: 100px;
  ${media.med`width: 300px;height: 200px;`};
  ${media.lg`width: 365px;height: 250px;`};
`;

export const VendingInteriorWrapper = styled.svg`
  width: 215px;
  height: 190px;
  ${media.med`width: 342px;height: 219px;`};
  ${media.lg`width: 452px;height: 305px;`};
`;

export const VendingExteriorStyled = styled(VendingExterior)`
  height: 200px;
  ${media.med`height: 300px;`};
  ${media.lg`height: 400px;`};
  position: absolute;
  bottom: 0;
  right: 0;
  .carvanaSign {
    transform: scale(2.8);
  }
  .signBorder {
    width: 160px;
    height: 30px;
    ${media.med` width: 245px;height: 50px;`};
    ${media.lg` width: 350px;height: 69px;`};
    border: 3px solid ${theme.carvana.yellow.primary};
    animation: ${borderFlicker} 2s linear infinite;
    left: 45px;
    top: 10px;
    ${media.med` top: 11px; left: 74px;`};
    ${media.lg` top: 13px; left: 93px;`};
    border-radius: 3px;
    position: absolute;
  }
  .window {
    opacity: 0.6;
    fill: url(#MyGradient);
  }
  .flickerOne {
    animation: ${flickerOne} 3s linear infinite;
  }
`;
