import { keyframes, css } from 'styled-components';

const fadeInKeyframes = keyframes`
from{
  filter: blur(5px);
  opacity: 0;
}
to {
  filter: blur(0);
  opacity: 1;
}
`;

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${fadeInKeyframes} ${type};
  `;

//Skeleton animation with keyframes
const skeletonKeyframes = keyframes`
0% {
  background-color: #eee;
}
100% {
  background-color: #ddd;
}
`;

export const skeletonAnimation = ({ time = '1s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${skeletonKeyframes} ${type} infinite alternate;
  `;
