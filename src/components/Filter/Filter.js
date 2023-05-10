import PropTypes from 'prop-types';

const Filter = ({ onChange, filter }) => {
  return (
    <label>
      Find contacts by name
      <input onChange={onChange} value={filter} type="text"></input>
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
