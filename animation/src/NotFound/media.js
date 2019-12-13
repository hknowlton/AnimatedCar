import { css } from 'styled-components';

const sizes = {
  sm: { low: 0, high: 550 },
  med: { low: 550, high: 1050 },
  lg: { low: 1050, high: 100000 }
};

export function createMediaQuery(high, low, args) {
  return css`
    @media (min-width: ${low}px) and (max-width: ${high}px) {
      ${css(...args)};
    }
  `;
}

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) =>
    createMediaQuery(sizes[label].high, sizes[label].low, args);
  return acc;
}, {});
