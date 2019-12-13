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

const driveSmallScreen = keyframes`
 from {
    left: -365px;
 }
 to {
    left: 100%;
 }
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
  ${media.sm` animation: ${driveSmallScreen} 5s infinite ease-in-out;`};
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
  height: 50px;
  display: flex;
  justify-content: space-around;
`;

export const RoadLine = styled.div`
  width: 30px;
  background-color: ${theme.carvana.yellow.primary};
  height: 10px;
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
  top: 50px;
  left: 30px;
  position: absolute;
  display: flex;
  width: 90%;
  justify-content: space-around;

  div {
    width: 80px;
    height: 80px;
    border: 1px solid ${theme.carvana.gray.medium};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .photoOne {
    background-image: url('Partner1.png');
  }
  .photoTwo {
    background-image: url('Partner2.png');
  }
  .photoThree {
    background-image: url('Partner3.png');
  }
`;

export const VendingWrapper = styled.div`
  ${media.sm`display:none`};
`;

export const VendingExteriorStyled = styled(VendingExterior)`
  height: 400px;
  position: absolute;
  bottom: 0;
  right: 0;
  .carvanaSign {
    transform: scale(2.8);
  }
  .signBorder {
    width: 350px;
    height: 69px;
    border: 3px solid ${theme.carvana.yellow.primary};
    animation: ${borderFlicker} 2s linear infinite;
    left: 93px;
    top: 13px;
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
