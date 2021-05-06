import PropTypes from 'prop-types';
import './style/ToogleFilter.css';

const ToogleFilter = ({ colorMarkerFilter, setColorMarkerFilter }) => {
  const handleClick = (filter) => {
    if (filter === 'bikes') setColorMarkerFilter('places');
    else setColorMarkerFilter('bikes');
  };
  return (
    <div className="toogle-filter">
      <span>Vélos / Places</span>
      <div className="toggle-container">
        <input type="checkbox" onClick={() => handleClick(colorMarkerFilter)} />
        <div className="slider round" />
      </div>
    </div>
  );
};

ToogleFilter.propTypes = {
  colorMarkerFilter: PropTypes.string.isRequired,
  setColorMarkerFilter: PropTypes.func.isRequired,
};

export default ToogleFilter;
