/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Bullet =  React.forwardRef(({size, ...props}, ref) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props} ref={ref}>
    <circle cx="10" cy="10" r="3" fill="currentColor" />
  </svg>
));
Bullet.displayName = 'Bullet';
Bullet.propTypes = {
  size: PropTypes.string
}
export default Bullet;
/* tslint:enable */
/* eslint-enable */
