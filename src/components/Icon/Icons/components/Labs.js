/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Labs =  React.forwardRef(({size, ...props}, ref) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props} ref={ref}>
    <path d="M7.33157 3.75H6.4827C6.06848 3.75 5.7327 3.41421 5.7327 3C5.7327 2.58579 6.06848 2.25 6.4827 2.25H8.08157H12.3453H13.9442C14.3584 2.25 14.6942 2.58579 14.6942 3C14.6942 3.41421 14.3584 3.75 13.9442 3.75H13.0953V9.13621L16.7648 13.8066C17.0372 14.1531 17.2066 14.5692 17.2537 15.0074C17.3007 15.4456 17.2236 15.8882 17.031 16.2846C16.8384 16.681 16.5382 17.0153 16.1647 17.2491C15.7911 17.483 15.3593 17.6071 14.9186 17.6071H14.9185H5.50841H5.50827C5.06756 17.6071 4.63576 17.483 4.26222 17.2491C3.88868 17.0153 3.58847 16.681 3.3959 16.2846C3.20332 15.8882 3.12616 15.4456 3.17322 15.0074C3.22029 14.5692 3.38968 14.1531 3.66204 13.8066L7.33157 9.13621V3.75ZM8.83157 3.75L6.41716 12.7279L4.84141 14.7335L4.8413 14.7336C4.74287 14.8588 4.68165 15.0092 4.66465 15.1676C4.64764 15.326 4.67552 15.4859 4.74512 15.6292C4.81472 15.7724 4.92321 15.8932 5.05821 15.9778C5.19317 16.0623 5.34918 16.1071 5.50841 16.1071L6.41716 12.7279L6.41731 12.7278L5.50854 16.1071H14.9183H14.9185C15.0777 16.1071 15.2337 16.0623 15.3687 15.9778C15.5037 15.8932 15.6122 15.7724 15.6818 15.6292C15.7514 15.4859 15.7792 15.326 15.7622 15.1676C15.7452 15.0092 15.684 14.8588 15.5856 14.7336L15.5855 14.7335L11.7556 9.85896C11.6517 9.72683 11.5953 9.56365 11.5953 9.3956V3.75H8.83157ZM6.41731 12.7278L8.83157 3.75V9.3956C8.83157 9.56365 8.77514 9.72683 8.67132 9.85896L6.41731 12.7278Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
));
Labs.displayName = 'Labs';
Labs.propTypes = {
  size: PropTypes.string
}
export default Labs;
/* tslint:enable */
/* eslint-enable */
