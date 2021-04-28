import { TileLayer } from 'react-leaflet';
import PropTypes from 'prop-types';

const TileLayerComponent = ({ tile }) => {
  /* Need an API key */
  if (tile === 'AliadeSmooth') {
    return (
      <TileLayer
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png?api_key=626aff83-a908-4f3d-8898-782129addfc5"
      />
    );
  }

  /* Need an API key */
  if (tile === 'AliadeSmoothDark') {
    return (
      <TileLayer
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=626aff83-a908-4f3d-8898-782129addfc5"
      />
    );
  }

  if (tile === 'OSM.Base') {
    return (
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    );
  }

  if (tile === 'OSM.Cycle') {
    return (
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"
      />
    );
  }

  /* Need an API key */
  if (tile === 'Burn') {
    return (
      <TileLayer
        attribution='&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png?apikey=27c09a69beb4401682d7801a0c1812ab"
      />
    );
  }
  return null;
};

TileLayerComponent.propTypes = {
  tile: PropTypes.oneOf([
    'AliadeSmooth',
    'AliadeSmoothDark',
    'OSM.Base',
    'OSM.Cycle',
    'Burn',
  ]).isRequired,
};

export default TileLayerComponent;
