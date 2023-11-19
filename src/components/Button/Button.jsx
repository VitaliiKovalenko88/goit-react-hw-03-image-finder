import css from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ onLoadMore }) => {
  return (
    <button className={css.btn} type="submite" onClick={onLoadMore}>
      Load More
    </button>
  );
};

export default Button;

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
