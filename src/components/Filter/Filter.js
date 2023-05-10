import PropTypes from 'prop-types';

const Filter = ({ onChange, filter }) => {
  return <input onChange={onChange} value={filter} type="text"></input>;
};

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func,
  filter: PropTypes.string,
};
