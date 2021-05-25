/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Moon =  React.forwardRef(({size, ...props}, ref) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props} ref={ref}>
    <path d="M10.1686 18C9.56977 18 8.97099 17.9381 8.38252 17.8038C7.06107 17.5045 5.81187 16.854 4.78981 15.9352C3.76774 15.0267 2.98313 13.8498 2.50823 12.549C2.03333 11.2482 1.8888 9.8338 2.08495 8.47105C2.2811 7.09797 2.80762 5.78684 3.61289 4.67186C4.4388 3.54656 5.52281 2.6587 6.75135 2.07024C7.03009 1.94635 7.35013 1.98765 7.58758 2.1838C7.81471 2.37996 7.90762 2.7 7.82503 2.98907C7.52564 4.01113 7.45337 5.09514 7.62888 6.13785C7.80439 7.19089 8.22767 8.19231 8.83677 9.03887C9.44588 9.88542 10.2615 10.5874 11.1803 11.0623C12.9457 11.9708 15.124 12.0121 16.9101 11.1656C17.1888 11.0314 17.5088 11.0727 17.7463 11.2791C17.9837 11.4753 18.0767 11.7953 17.9837 12.0844C17.5914 13.4059 16.8688 14.6241 15.8983 15.6049C14.9279 16.5856 13.7303 17.298 12.4192 17.68C11.6862 17.8968 10.9325 18 10.1686 18ZM6.00803 4.37247C5.58475 4.72348 5.20277 5.12611 4.88272 5.58036C4.222 6.48886 3.78839 7.56255 3.63353 8.67753C3.46835 9.80283 3.59224 10.9591 3.97422 12.0225C4.35621 13.0858 4.99629 14.0356 5.83252 14.7789C6.65843 15.5223 7.67018 16.0385 8.73354 16.2862C9.80722 16.534 10.9325 16.4927 11.9856 16.1933C13.0386 15.8836 14.0194 15.3055 14.804 14.5105C15.2066 14.1079 15.5576 13.6536 15.8467 13.1581C14.04 13.5504 12.1198 13.2923 10.4783 12.4457C9.34264 11.8573 8.34123 11.0004 7.58758 9.94737C6.83394 8.90465 6.31775 7.67611 6.10094 6.39595C5.98738 5.73522 5.95641 5.04352 6.00803 4.37247Z"
      fill="currentColor" />
  </svg>
));
Moon.displayName = 'Moon';
Moon.propTypes = {
  size: PropTypes.string
}
export default Moon;
/* tslint:enable */
/* eslint-enable */
