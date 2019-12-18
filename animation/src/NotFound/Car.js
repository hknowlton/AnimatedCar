import React from 'react';
import PropTypes from 'prop-types';
import theme from './theme';
import { CarWrapper } from './styles';

const Car = ({ className }) => (
  <span className={className}>
    <CarWrapper viewBox="0 0 365 250">
      {/* halo */}
      <ellipse
        rx="40px"
        ry="10px"
        stroke={theme.carvana.yellow.primary}
        cx="180"
        cy="20"
        className="halo"
        fill="transparent"
        strokeWidth="5"
      />
      {/* <!-- Top --> */}
      <rect
        x="70"
        y="60"
        width="220"
        height="130"
        fill={theme.carvana.gray.veryLight}
        rx="150"
        stroke={theme.carvana.blue.primary}
        strokeWidth="10"
      />
      {/* <!-- Body --> */}
      <rect
        x="10"
        y="120"
        width="340"
        height="80"
        fill={theme.carvana.blue.primary}
        rx="30"
        stroke={theme.carvana.gray.light}
      />
      <g>
        {/* <!-- Left line --> */}
        <line
          x1="145"
          y1="60"
          x2="145"
          y2="130"
          stroke={theme.carvana.blue.primary}
          strokeWidth="10"
        />
        {/* <!-- Right line --> */}
        <line
          x1="215"
          y1="60"
          x2="215"
          y2="130"
          stroke={theme.carvana.blue.primary}
          strokeWidth="10"
        />
      </g>
      <g>
        {/* <!-- Left bumper --> */}
        <rect
          x="0"
          y="160"
          width="40"
          height="20"
          fill={theme.carvana.gray.medium}
          rx="10"
        />
        {/* <!-- Right bumper --> */}
        <rect
          x="325"
          y="160"
          width="40"
          height="20"
          fill={theme.carvana.gray.medium}
          rx="10"
        />
      </g>
      {/* <!-- Left wheel --> */}
      <g className="wheel">
        <circle
          r="40px"
          fill={theme.carvana.gray.veryDark}
          stroke={theme.carvana.white.primary}
          strokeWidth="5"
          cx="90"
          cy="190"
        />
        <line
          x1="90"
          x2="90"
          y1="160"
          y2="220"
          stroke={theme.carvana.gray.veryLight}
          strokeWidth="3"
        />
        <line
          x1="60"
          x2="120"
          y1="190"
          y2="190"
          stroke={theme.carvana.gray.veryLight}
          strokeWidth="3"
        />
        <circle r="15px" fill={theme.carvana.gray.dark} cx="90" cy="190" />
      </g>
      {/* <!-- Right wheel --> */}
      <g className="wheel">
        <circle
          r="40px"
          fill={theme.carvana.gray.veryDark}
          stroke="white"
          strokeWidth="5"
          cx="270"
          cy="190"
        />
        <line
          x1="270"
          x2="270"
          y1="160"
          y2="220"
          stroke={theme.carvana.gray.veryLight}
          strokeWidth="3"
        />
        <line
          x1="240"
          x2="300"
          y1="190"
          y2="190"
          stroke={theme.carvana.gray.veryLight}
          strokeWidth="3"
        />
        <circle r="15px" fill={theme.carvana.gray.dark} cx="270" cy="190" />
      </g>
      <g>
        {/* <!-- Gold light --> */}
        <circle
          r="15px"
          fill={theme.carvana.yellow.primary}
          cx="340"
          cy="140"
        />
        {/* <!-- Red light --> */}
        <circle r="10px" fill={theme.carvana.red.primary} cx="15" cy="140" />
      </g>
    </CarWrapper>
  </span>
);

Car.propTypes = {
  className: PropTypes.string
};

Car.defaultProps = {
  className: ''
};

export default Car;
