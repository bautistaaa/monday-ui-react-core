/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Highlight =  React.forwardRef(({size, ...props}, ref) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props} ref={ref}>
    <path d="M2.25 17C2.25 16.5858 2.58579 16.25 3 16.25H17C17.4142 16.25 17.75 16.5858 17.75 17C17.75 17.4142 17.4142 17.75 17 17.75H3C2.58579 17.75 2.25 17.4142 2.25 17Z"
      fill="currentColor" className="highlight-bar" fillRule="evenodd" clipRule="evenodd" />
    <path d="M14.5189 3.81513C14.5189 3.81516 14.5189 3.81511 14.5189 3.81513L7.45395 10.8801L7.1005 12.9032L9.11938 12.5466L16.1849 5.48108C16.1849 5.48105 16.1848 5.4811 16.1849 5.48108C16.2542 5.41166 16.2933 5.31747 16.2933 5.21935C16.2933 5.12122 16.2543 5.02711 16.1849 4.95769M16.1849 4.95769L15.0424 3.81513C15.0424 3.81511 15.0424 3.81516 15.0424 3.81513C14.973 3.74578 14.8788 3.70674 14.7807 3.70674C14.6825 3.70674 14.5883 3.74578 14.5189 3.81513M13.5196 2.8155C13.8541 2.48111 14.3077 2.29326 14.7807 2.29326C15.2536 2.29326 15.7072 2.48111 16.0417 2.8155L17.1844 3.95821C17.5188 4.2927 17.7067 4.74638 17.7067 5.21935C17.7067 5.69232 17.5189 6.14592 17.1845 6.48041L9.96138 13.7035C9.85888 13.806 9.72734 13.8745 9.58459 13.8997L6.35377 14.4705C6.12686 14.5106 5.89464 14.4376 5.73155 14.2748C5.56846 14.112 5.49496 13.8799 5.53462 13.6529L6.10002 10.4167C6.12504 10.2735 6.19365 10.1414 6.29647 10.0386L13.5196 2.8155Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
));
Highlight.displayName = 'Highlight';
Highlight.propTypes = {
  size: PropTypes.string
}
export default Highlight;
/* tslint:enable */
/* eslint-enable */
