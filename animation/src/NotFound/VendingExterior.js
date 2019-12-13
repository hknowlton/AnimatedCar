import React from 'react';
import PropTypes from 'prop-types';
import theme from './theme';

const VendingExterior = ({ className }) => (
  <span className={className}>
    <div className="signBorder" />
    <svg width="460" height="400">
      {/* roof */}
      <rect
        x="10"
        y="5"
        width="450"
        height="100"
        fill={theme.carvana.gray.dark}
        rx="4"
      />
      {/* carvana sign */}
      <g>
        <path
          d="M95.82,20.11l-3.94-10H88.47l.19.46,5.83,14.13h2.58l6-14.59H99.74l-3.92,10M131.28,19l-6.89-8.91h-2.75V24.56h3.08V15.37l7.11,9.19h2.53V10.07h-3.08ZM109.6,10l-6.37,14.59h3.18l2.64-6.15h0L110.91,14v0l0-.07,1.71,4.11-1.17,2.68h2.29l.81,1.94.77,1.84h3.3L112.29,10Zm37,0h-2.7l-6.37,14.59h3.18l2.64-6.15h0l1.85-4.33h0l.05-.1,1.71,4.1-1.17,2.7h2.3l.81,1.94.77,1.84H153Z"
          fill={theme.carvana.gray.veryLight}
          className="carvanaSign flickerOne"
        />
        <path
          d="M52.78,21.4a8,8,0,0,1-2,1.52,5.53,5.53,0,0,1-2.64.6A5.44,5.44,0,0,1,45.82,23,5.58,5.58,0,0,1,44,21.71a6.13,6.13,0,0,1-1.23-2,6.61,6.61,0,0,1-.44-2.41v0a6.6,6.6,0,0,1,.44-2.4,6.18,6.18,0,0,1,1.22-2,5.61,5.61,0,0,1,1.83-1.32,5.45,5.45,0,0,1,2.3-.49,6.74,6.74,0,0,1,1.49.16,6,6,0,0,1,1.22.43,5.16,5.16,0,0,1,1,.63,11.09,11.09,0,0,1,.89.76l.25.23.94-1-.25-.23c-.35-.32-.71-.62-1.07-.89a6.9,6.9,0,0,0-1.21-.72A6.77,6.77,0,0,0,49.91,10a8.31,8.31,0,0,0-1.8-.18,6.73,6.73,0,0,0-2.88.61A6.93,6.93,0,0,0,43,12.06a7.29,7.29,0,0,0-1.48,2.38A7.86,7.86,0,0,0,41,17.31v0a8,8,0,0,0,.53,2.9A7.1,7.1,0,0,0,43,22.61a7.26,7.26,0,0,0,2.25,1.6,6.94,6.94,0,0,0,2.84.59,7.61,7.61,0,0,0,1.77-.2,8,8,0,0,0,1.52-.52,7.53,7.53,0,0,0,1.29-.79,11.16,11.16,0,0,0,1.09-1l.24-.24L53,21.17l-.24.23M63.47,10,56.6,24.56H58L64,11.88,67.37,19l-.85,1.81h1.71L70,24.56h1.36L64.52,10h-1M81.83,18.5a6.09,6.09,0,0,0,1.24-.32,4.83,4.83,0,0,0,1.49-.85,3.7,3.7,0,0,0,1-1.3,4.1,4.1,0,0,0,.35-1.7v0a4.19,4.19,0,0,0-.29-1.55,4,4,0,0,0-.81-1.25A4.76,4.76,0,0,0,83,10.43a7.57,7.57,0,0,0-2.43-.36h-6V24.56H75.9v-5.9h4.39l4.5,5.9h1.7L81.83,18.5M75.9,17.38v-6h4.66a4.79,4.79,0,0,1,3,.81,2.57,2.57,0,0,1,1,2.17v0a2.78,2.78,0,0,1-.26,1.2,2.68,2.68,0,0,1-.78.94,3.88,3.88,0,0,1-1.29.63,6.38,6.38,0,0,1-1.8.24H75.9"
          fill={theme.carvana.gray.veryLight}
          className="carvanaSign"
        />
      </g>
      {/* roof outline */}
      <line
        x1="5"
        y1="100"
        x2="465"
        y2="100"
        stroke={theme.carvana.blue.medium}
        strokeWidth="10"
        strokeLinecap="round"
      />
      {/* window */}
      <linearGradient id="MyGradient" x2="0%" y2="100%">
        <stop offset="5%" stopColor={theme.carvana.white.primary} />
        <stop offset="95%" stopColor={theme.carvana.gray.medium} />
      </linearGradient>
      <rect x="10" y="105" width="460" height="300" rx="4" className="window" />
      {/* window frames */}
      <rect
        x="10"
        y="106"
        width="100"
        height="295"
        rx="2"
        stroke={theme.carvana.gray.dark}
        strokeWidth="4"
        fill="transparent"
      />
      <rect
        x="110"
        y="106"
        width="100"
        height="295"
        rx="2"
        stroke={theme.carvana.gray.dark}
        strokeWidth="4"
        fill="transparent"
      />
      <rect
        x="210"
        y="106"
        width="100"
        height="295"
        rx="2"
        stroke={theme.carvana.gray.dark}
        strokeWidth="4"
        fill="transparent"
      />
      <rect
        x="310"
        y="106"
        width="100"
        height="295"
        rx="2"
        stroke={theme.carvana.gray.dark}
        strokeWidth="4"
        fill="transparent"
      />
      <rect
        x="410"
        y="106"
        width="100"
        height="295"
        rx="2"
        stroke={theme.carvana.gray.dark}
        strokeWidth="4"
        fill="transparent"
      />
    </svg>
  </span>
);

VendingExterior.propTypes = {
  className: PropTypes.string
};

VendingExterior.defaultProps = {
  className: ''
};

export default VendingExterior;
