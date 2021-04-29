// Import Modules
import { LatLng } from 'leaflet';
import ReactLeafletSearch from 'react-leaflet-search';
import PropTypes from 'prop-types';

// Import Tools
import SearchService from '../../Services/SearchService';

const Search = ({ fromTo, update }) => {
  return (
    <ReactLeafletSearch
      on
      onChange={(info) => {
        if (fromTo === 'from') {
          SearchService.setStartPoint([info.latLng.lat, info.latLng.lng]);
        }
        if (fromTo === 'to') {
          SearchService.setEndPoint([info.latLng.lat, info.latLng.lng]);
        }
        update();
      }}
      inputPlaceholder={
        fromTo === 'from' ? 'Adresse de départ' : "Adresse d'arrivée"
      }
      position="topleft"
      provider="OpenStreetMap"
      providerOptions={{
        searchBounds: [
          new LatLng(47.2719, -1.3728),
          new LatLng(47.1645, -1.6423),
        ],
        region: 'fr',
      }}
      closeResultsOnClick
      showMarker={false}
      showPopup={false}
    />
  );
};

Search.propTypes = {
  fromTo: PropTypes.string.isRequired,
  update: PropTypes.func.isRequired,
};

export default Search;
