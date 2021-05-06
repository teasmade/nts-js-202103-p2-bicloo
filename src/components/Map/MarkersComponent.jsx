// Import Modules
import { Marker, Popup } from 'react-leaflet';
import PropTypes from 'prop-types';

// Import Tools
import { useRef } from 'react';
import SearchService from '../../Services/SearchService';

// Export the user position marker
export const UserMarker = ({
  userPosition,
  userIcon,
  setColorMarkerFilter,
}) => {
  return (
    <Marker
      className="testMarker"
      position={userPosition}
      icon={userIcon}
      onClick={() => setColorMarkerFilter('places')}
    />
  );
};

UserMarker.propTypes = {
  userPosition: PropTypes.arrayOf(PropTypes.number).isRequired,
  userIcon: PropTypes.objectOf(PropTypes.any).isRequired,
  setColorMarkerFilter: PropTypes.func.isRequired,
};

// Export an array of marker defined by the data received
const StationsMarkers = ({
  stationsArray,
  handleMarkerColor,
  colorMarkerFilter,
  setPopupIsOpen,
  setPopupDisplayed,
}) => {
  const popupRef = useRef();
  return stationsArray.map((station) => (
    <Marker
      key={station.fields.number}
      position={[station.fields.position[0], station.fields.position[1]]}
      icon={handleMarkerColor(
        station.fields.available_bikes,
        station.fields.available_bike_stands,
        colorMarkerFilter
      )}
    >
      <Popup ref={popupRef}>
        {station.fields.address}
        <br />
        {station.fields.available_bikes} bikes available
        <br />
        {station.fields.available_bike_stands} stands available
        <br />
        <button
          type="button"
          onClick={() => {
            SearchService.setChoosedStation(
              station.fields.position,
              station.fields.available_bikes,
              station.fields.available_bike_stands
            );
            setPopupIsOpen(true);
            setPopupDisplayed('validation');
            popupRef.current.leafletElement.options.leaflet.map.closePopup();
          }}
        >
          Choisir cette station
        </button>
      </Popup>
    </Marker>
  ));
};

StationsMarkers.propTypes = {
  stationsArray: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleMarkerColor: PropTypes.func.isRequired,
  colorMarkerFilter: PropTypes.string.isRequired,
  setCoordinates: PropTypes.func.isRequired,
  setPopupIsOpen: PropTypes.func.isRequired,
  setPopupDisplayed: PropTypes.func.isRequired,
};

export default StationsMarkers;
