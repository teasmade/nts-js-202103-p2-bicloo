import PropTypes from 'prop-types';
import SearchService from '../../../Services/SearchService';

import './ValidationPopUp.css';

const PopUp = ({
  list,
  popupIsOpen,
  setPopupIsOpen,
  setCoordinates,
  popupDisplayed,
}) => {
  const popupClass = popupIsOpen ? 'popup' : 'popup-close';

  // Fill w/ Not signed user

  const notSigned = (
    <>
      <span>Vous n&#39;êtes pas signé !</span>
      <button
        type="button"
        className="popup-btn"
        onClick={() => {
          setPopupIsOpen(false);
        }}
      >
        Fermer
      </button>
    </>
  );

  // Fill popup w/ validation message

  const addXpPopup = (
    <>
      <span>Course validé !!!</span>
      <button
        type="button"
        className="popup-btn"
        onClick={() => {
          setPopupIsOpen(false);
        }}
      >
        Fermer
      </button>
    </>
  );

  // Fill popup w/ nearest stations

  const chooseDirection = (fromOrTo) => {
    if (fromOrTo === 'results-from') {
      SearchService.setStartStation(SearchService.choosedStation[0]);
      SearchService.setStartXp(SearchService.choosedStation[1]);
    }
    if (fromOrTo === 'results-to') {
      SearchService.setEndStation(SearchService.choosedStation[0]);
      SearchService.setEndXp(SearchService.choosedStation[2]);
    }
  };

  const results = (
    <>
      {list.map((station) => (
        <div className="results-el" key={station.name}>
          <span>{station.address}</span>
          <span>{Math.round(station.distance)} mètres</span>
          <span>
            Xp:{' '}
            {popupDisplayed === 'results-from'
              ? SearchService.convertToXp(station.bikes)
              : SearchService.convertToXp(station.stands)}
          </span>
          <span>
            {`Vélo${station.bikes > 1 ? 's' : ''} dispo: ${station.bikes}`} -{' '}
            {`Place${station.stands > 1 ? 's' : ''} dispo: ${station.stands}`}
          </span>
          <button
            className="popup-btn"
            type="button"
            onClick={() => {
              SearchService.setChoosedStation(
                station.position,
                station.bikes,
                station.stands
              );
              chooseDirection(popupDisplayed);
              SearchService.resetChoosedStation();
              setPopupIsOpen(false);
              setCoordinates(SearchService.getCoordinates());
            }}
          >
            Choisir
          </button>
        </div>
      ))}
    </>
  );

  // Fill popup w/ depart or destination answer

  const validation = (
    <>
      <p>Valider cette station comme :</p>
      <button
        className="popup-btn"
        type="button"
        onClick={() => {
          SearchService.setStartStation(SearchService.choosedStation[0]);
          SearchService.setStartXp(SearchService.choosedStation[1]);
          SearchService.resetChoosedStation();
          setCoordinates(SearchService.getCoordinates());
          setPopupIsOpen(false);
        }}
      >
        Station de depart
      </button>
      <button
        className="popup-btn"
        type="button"
        onClick={() => {
          SearchService.setEndStation(SearchService.choosedStation[0]);
          SearchService.setEndXp(SearchService.choosedStation[2]);
          SearchService.resetChoosedStation();
          setCoordinates(SearchService.getCoordinates());
          setPopupIsOpen(false);
        }}
      >
        Utiliser comme arrivé
      </button>
      <button
        type="button"
        className="popup-btn"
        onClick={() => setPopupIsOpen(false)}
      >
        Annuler
      </button>
    </>
  );

  // Choose what to display on the popup

  let display = null;
  if (popupDisplayed === 'notSigned') display = notSigned;
  if (popupDisplayed.includes('results')) display = results;
  if (popupDisplayed === 'validation') display = validation;
  if (popupDisplayed === 'addXp') display = addXpPopup;

  return (
    <div className={`bg-${popupClass}`}>
      <div className={popupClass}>{display}</div>
    </div>
  );
};

PopUp.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  popupIsOpen: PropTypes.bool.isRequired,
  setPopupIsOpen: PropTypes.func.isRequired,
  setCoordinates: PropTypes.func.isRequired,
  popupDisplayed: PropTypes.string.isRequired,
};

export default PopUp;
