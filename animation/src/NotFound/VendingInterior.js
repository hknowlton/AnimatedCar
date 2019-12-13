import React from 'react';
import PropTypes from 'prop-types';
import theme from './theme';
import { VendingWallDecor } from './styles';

const VendingInterior = ({ className }) => (
  <span className={className}>
    <svg width="450" height="300">
      <rect
        x="0"
        y="0"
        width="450"
        height="300"
        fill={theme.carvana.gray.veryLight}
        rx="4"
      />
    </svg>
    <VendingWallDecor>
      <div className="photoOne" />
      <div className="photoTwo" />
      <div className="photoThree" />
    </VendingWallDecor>
  </span>
);

VendingInterior.propTypes = {
  className: PropTypes.string
};

VendingInterior.defaultProps = {
  className: ''
};

export default VendingInterior;
