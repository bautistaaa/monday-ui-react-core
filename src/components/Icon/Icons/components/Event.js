/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Event =  React.forwardRef(({size, ...props}, ref) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props} ref={ref}>
    <path d="M6.85946 2.77441C6.85946 2.3602 6.52367 2.02441 6.10946 2.02441C5.69524 2.02441 5.35946 2.3602 5.35946 2.77441V4.99771V7.22108C5.35946 7.63529 5.69524 7.97108 6.10946 7.97108C6.52367 7.97108 6.85946 7.63529 6.85946 7.22108V5.74771H11.6678C12.082 5.74771 12.4178 5.41192 12.4178 4.99771C12.4178 4.58349 12.082 4.24771 11.6678 4.24771H6.85946V2.77441ZM2.56968 4.79298C2.91881 4.44385 3.39233 4.24771 3.88608 4.24771C4.30029 4.24771 4.63608 4.58349 4.63608 4.99771C4.63608 5.41192 4.30029 5.74771 3.88608 5.74771C3.79016 5.74771 3.69817 5.78581 3.63034 5.85363C3.56252 5.92146 3.52441 6.01345 3.52441 6.10937V8.69435H16.476V6.10937C16.476 6.01345 16.4379 5.92146 16.3701 5.85363C16.3023 5.78581 16.2103 5.74771 16.1144 5.74771H14.6411V7.22108C14.6411 7.63529 14.3053 7.97108 13.8911 7.97108C13.4769 7.97108 13.1411 7.63529 13.1411 7.22108V5.00782L13.141 4.99771L13.1411 4.9876V2.77441C13.1411 2.3602 13.4769 2.02441 13.8911 2.02441C14.3053 2.02441 14.6411 2.3602 14.6411 2.77441V4.24771H16.1144C16.6081 4.24771 17.0816 4.44385 17.4308 4.79298C17.7799 5.14211 17.976 5.61563 17.976 6.10937V9.44435V16.1144C17.976 16.6081 17.7799 17.0816 17.4308 17.4308C17.0816 17.7799 16.6081 17.976 16.1144 17.976H3.88608C3.39233 17.976 2.91881 17.7799 2.56968 17.4308C2.22055 17.0816 2.02441 16.6081 2.02441 16.1144V9.44435V6.10937C2.02441 5.61563 2.22055 5.14211 2.56968 4.79298ZM3.52441 16.1144V10.1944H16.476V16.1144C16.476 16.2103 16.4379 16.3023 16.3701 16.3701C16.3023 16.4379 16.2103 16.476 16.1144 16.476H3.88608C3.79016 16.476 3.69817 16.4379 3.63034 16.3701C3.56252 16.3023 3.52441 16.2103 3.52441 16.1144Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
    <rect x="7.41" y="12.35" width="4.94" height="1.5" rx=".75" fill="currentColor" />
  </svg>
));
Event.displayName = 'Event';
Event.propTypes = {
  size: PropTypes.string
}
export default Event;
/* tslint:enable */
/* eslint-enable */
