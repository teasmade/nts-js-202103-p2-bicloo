// Import Modules
import { Marker, Popup } from 'react-leaflet';
import PropTypes from 'prop-types';

// Import Tools
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
  setCoordinates,
}) => {
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
      <Popup>
        {station.fields.address}
        <br />
        {station.fields.available_bikes} vélos disponibles
        <br />
        {station.fields.available_bike_stands} emplacements disponibles
        <br />
        <button
          type="button"
          onClick={() => {
            SearchService.setStartStation(station.fields.position);
            setCoordinates(SearchService.getCoordinates());
          }}
        >
          Utiliser comme départ
        </button>
        <br />
        <button
          type="button"
          onClick={() => {
            SearchService.setEndStation(station.fields.position);
            setCoordinates(SearchService.getCoordinates());
          }}
        >
          Utiliser comme arrivée
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
};

export default StationsMarkers;
