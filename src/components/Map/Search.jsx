/* eslint-disable react/prop-types */
import { LatLng } from 'leaflet';
import ReactLeafletSearch from 'react-leaflet-search';
import SearchService from '../../Services/SearchService';

const Search = (props) => {
  return (
    <ReactLeafletSearch
      onChange={(info) => {
        if (props.fromTo === 'from') {
          SearchService.setStartPoint([info.latLng.lat, info.latLng.long]);
        } else {
          SearchService.setEndPoint([info.latLng.lat, info.latLng.long]);
        }
      }}
      inputPlaceholder="Chercher"
      position="topleft"
      provider="OpenStreetMap"
      providerOptions={{
        searchBounds: [
          new LatLng(47.2719, -1.3728),
          new LatLng(47.1645, -1.6423),
        ],
        region: 'fr',
      }}
      showMarker={false}
      showPopup={false}
    />
  );
};

export default Search;
