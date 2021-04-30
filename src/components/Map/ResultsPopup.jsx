import PropTypes from 'prop-types';
import SearchService from '../../Services/SearchService';

const ResultsPopup = ({
  list,
  popupIsOpen,
  setPopupIsOpen,
  setCoordinates,
}) => {
  return (
    <div className={`results-container${!popupIsOpen ? '-close' : ''}`}>
      {list.map((station) => (
        <div className="results-el" key={station.name}>
          <span>{station.address}</span>
          <span>{Math.round(station.distance)} mètres</span>
          <span>Xp: ///</span>
          <span>
            {`Vélo${station.bikes > 1 ? 's' : ''} dispo: ${station.bikes}`} -{' '}
            {`Place${station.stands > 1 ? 's' : null} dispo: ${station.stands}`}
          </span>
          <button
            className="results-choose-btn"
            type="button"
            onClick={() => {
              SearchService.setStartStation(station.position);
              setPopupIsOpen(!popupIsOpen);
              setCoordinates(SearchService.getCoordinates());
            }}
          >
            Choisir
          </button>
        </div>
      ))}
    </div>
  );
};

ResultsPopup.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  popupIsOpen: PropTypes.bool.isRequired,
  setPopupIsOpen: PropTypes.func.isRequired,
  setCoordinates: PropTypes.func.isRequired,
};

export default ResultsPopup;
