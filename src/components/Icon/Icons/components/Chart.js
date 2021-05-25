/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Chart =  React.forwardRef(({size, ...props}, ref) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props} ref={ref}>
    <path d="M10 3.25C8.20979 3.25 6.4929 3.96116 5.22703 5.22703C3.96116 6.4929 3.25 8.20979 3.25 10C3.25 11.7902 3.96116 13.5071 5.22703 14.773C6.4929 16.0388 8.20979 16.75 10 16.75C11.7902 16.75 13.5071 16.0388 14.773 14.773C16.0388 13.5071 16.75 11.7902 16.75 10C16.75 8.20979 16.0388 6.4929 14.773 5.22703C13.5071 3.96116 11.7902 3.25 10 3.25ZM9.25 4.80383C8.13491 4.96476 7.09374 5.48164 6.28769 6.28769C5.30312 7.27226 4.75 8.60761 4.75 10C4.75 11.3924 5.30312 12.7277 6.28769 13.7123C7.27226 14.6969 8.60761 15.25 10 15.25C11.1399 15.25 12.2416 14.8793 13.1439 14.2046L9.46967 10.5303C9.32902 10.3897 9.25 10.1989 9.25 10V4.80383ZM14.2046 13.1439L10.75 9.68934V4.80383C11.8651 4.96476 12.9063 5.48164 13.7123 6.28769C14.6969 7.27226 15.25 8.60761 15.25 10C15.25 11.1399 14.8793 12.2416 14.2046 13.1439Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
));
Chart.displayName = 'Chart';
Chart.propTypes = {
  size: PropTypes.string
}
export default Chart;
/* tslint:enable */
/* eslint-enable */
