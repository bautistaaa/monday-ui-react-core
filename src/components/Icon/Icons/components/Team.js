/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Team =  React.forwardRef(({size, ...props}, ref) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props} ref={ref}>
    <path d="M5.89284 2C5.45666 2 5.02476 2.08591 4.62178 2.25283C4.21881 2.41975 3.85266 2.6644 3.54423 2.97282C3.23581 3.28125 2.99116 3.6474 2.82424 4.05037C2.65732 4.45335 2.57141 4.88525 2.57141 5.32143C2.57141 5.7576 2.65732 6.18951 2.82424 6.59248C2.99116 6.99546 3.23581 7.36161 3.54423 7.67003C3.85266 7.97846 4.21881 8.22311 4.62178 8.39003C5.02476 8.55695 5.45666 8.64286 5.89284 8.64286C6.32902 8.64286 6.76092 8.55695 7.1639 8.39003C7.56687 8.22311 7.93302 7.97846 8.24144 7.67003C8.54987 7.36161 8.79452 6.99546 8.96144 6.59248C9.12836 6.18951 9.21427 5.7576 9.21427 5.32143C9.21427 4.88525 9.12836 4.45335 8.96144 4.05037C8.79452 3.6474 8.54987 3.28125 8.24144 2.97282C7.93302 2.6644 7.56687 2.41975 7.1639 2.25283C6.76092 2.08591 6.32902 2 5.89284 2ZM5.19581 3.63865C5.41679 3.54711 5.65365 3.5 5.89284 3.5C6.13203 3.5 6.36888 3.54711 6.58987 3.63865C6.81086 3.73018 7.01165 3.86435 7.18078 4.03348C7.34992 4.20262 7.48409 4.40341 7.57562 4.6244C7.66716 4.84538 7.71427 5.08223 7.71427 5.32143C7.71427 5.56062 7.66716 5.79747 7.57562 6.01846C7.48409 6.23944 7.34992 6.44024 7.18078 6.60937C7.01165 6.77851 6.81085 6.91267 6.58987 7.00421C6.36888 7.09574 6.13203 7.14286 5.89284 7.14286C5.65365 7.14286 5.41679 7.09574 5.19581 7.00421C4.97482 6.91267 4.77403 6.77851 4.6049 6.60937C4.43576 6.44024 4.30159 6.23944 4.21006 6.01846C4.11852 5.79747 4.07141 5.56062 4.07141 5.32143C4.07141 5.08224 4.11852 4.84538 4.21006 4.6244C4.30159 4.40341 4.43576 4.20262 4.6049 4.03348C4.77403 3.86435 4.97482 3.73018 5.19581 3.63865ZM2.78664 11.6438C3.61046 10.82 4.7278 10.3571 5.89286 10.3571C7.05791 10.3571 8.17525 10.82 8.99907 11.6438C9.8229 12.4676 10.2857 13.5849 10.2857 14.75V15.7143H1.5V14.75C1.5 13.5849 1.96282 12.4676 2.78664 11.6438ZM5.89286 8.85715C4.32997 8.85715 2.8311 9.478 1.72598 10.5831C0.620853 11.6883 0 13.1871 0 14.75V16.4643C0 16.8785 0.335786 17.2143 0.75 17.2143H11.0357C11.4499 17.2143 11.7857 16.8785 11.7857 16.4643V14.75C11.7857 13.1871 11.1649 11.6883 10.0597 10.5831C8.95461 9.478 7.45574 8.85715 5.89286 8.85715ZM10.4643 3.5C10.3217 3.50001 10.1796 3.5164 10.0408 3.54887C9.63744 3.64319 9.23402 3.39268 9.1397 2.98935C9.04538 2.58602 9.29588 2.18259 9.69922 2.08827C9.95 2.02963 10.2067 2.00001 10.4643 2H10.4643C11.3452 2 12.19 2.34994 12.8129 2.97282C13.4358 3.59571 13.7857 4.44053 13.7857 5.32143C13.7857 6.20233 13.4358 7.04714 12.8129 7.67003C12.19 8.29292 11.3452 8.64286 10.4643 8.64286H10.464C10.2268 8.64277 9.99029 8.61764 9.75838 8.56788C9.35338 8.48099 9.09551 8.08223 9.1824 7.67724C9.26929 7.27224 9.66805 7.01437 10.073 7.10126C10.2016 7.12885 10.3328 7.14279 10.4643 7.14286V3.5ZM10.4643 3.5C10.9474 3.50001 11.4106 3.69191 11.7522 4.03348C12.0938 4.37507 12.2857 4.83836 12.2857 5.32143C12.2857 5.8045 12.0938 6.26779 11.7522 6.60937C11.4107 6.95089 10.9475 7.14279 10.4645 7.14286L10.4643 3.5ZM11.7424 8.99612C11.338 8.90629 10.9374 9.16125 10.8476 9.5656C10.7577 9.96996 11.0127 10.3706 11.417 10.4604C12.393 10.6772 13.2657 11.2205 13.8912 12.0003C14.5166 12.7802 14.8574 13.7501 14.8571 14.7498V14.75V15.7143H13.3214C12.9072 15.7143 12.5714 16.0501 12.5714 16.4643C12.5714 16.8785 12.9072 17.2143 13.3214 17.2143H15.6071C16.0214 17.2143 16.3571 16.8785 16.3571 16.4643V14.7502V14.75C16.3574 13.409 15.9003 12.108 15.0613 11.0619C14.2223 10.0157 13.0515 9.28699 11.7424 8.99612Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
));
Team.displayName = 'Team';
Team.propTypes = {
  size: PropTypes.string
}
export default Team;
/* tslint:enable */
/* eslint-enable */
