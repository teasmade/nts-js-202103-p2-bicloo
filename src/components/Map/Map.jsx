import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
} from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { useState, useEffect } from 'react';
import {
  createClusterCustomIcon,
  userIcon,
  redMarker,
  orangeMarker,
  yellowMarker,
  greenMarker,
} from './CustomIcon';

import sampleStations from './data/sampleStations';
import './style/Map.css';
import './style/CustomIcon.css';
import 'react-leaflet-markercluster/dist/styles.min.css';
import LeafletgeoSearch from './Search';
import SearchService from '../../Services/SearchService';
import Routing from './Routing';

// Nantes "position": [47.2076056402, -1.55753246791]

const Map = () => {
  const defaultPosition = [47.2076056402, -1.55753246791];

  const [userPosition, setUserPosition] = useState(defaultPosition);

  const getUserPosition = (lat, long) => {
    setUserPosition([lat, long]);
  };

  // Get user postion and change the userPostion state
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) =>
        getUserPosition(position.coords.latitude, position.coords.longitude),
      () => defaultPosition
    );
  }, []);

  const [colorMarkerFilter, setColorMarkerFilter] = useState('bikes');
  const handleMarkerColor = (availableBikes, availablePlaces, filter) => {
    if (filter === 'bikes') {
      if (availableBikes === 0) return redMarker;
      if (availableBikes <= 4) return orangeMarker;
      if (availableBikes <= 9) return yellowMarker;
      return greenMarker;
    }
    if (filter === 'places') {
      if (availablePlaces === 0) return redMarker;
      if (availablePlaces <= 4) return orangeMarker;
      if (availablePlaces <= 9) return yellowMarker;
      return greenMarker;
    }
    return greenMarker;
  };

  return (
    <>
      <MapContainer center={userPosition} zoom={14} scrollWheelZoom>
        <LeafletgeoSearch whichBar="from" />
        <LeafletgeoSearch whichBar="to" />
        <Routing coordinates={SearchService.getCoordinates()} />
        <LayersControl position="topright">
          <LayersControl.BaseLayer name="AliadeSmooth">
            {/* Need an API key */}
            <TileLayer
              attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
              url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png?api_key=626aff83-a908-4f3d-8898-782129addfc5"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer checked name="AliadeSmoothDark">
            {/* Need an API key */}
            <TileLayer
              attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
              url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=626aff83-a908-4f3d-8898-782129addfc5"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="OpenStreetMap.Base">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="OpenStreetMap.Cycle">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
        </LayersControl>
        <Marker
          className="testMarker"
          position={userPosition}
          icon={userIcon}
          onClick={() => setColorMarkerFilter('places')}
        >
          <Popup>This is our test position marker</Popup>
        </Marker>
        <MarkerClusterGroup
          showCoverageOnHover={false}
          iconCreateFunction={createClusterCustomIcon}
        >
          {sampleStations.map((station) => (
            <Marker
              key={station.fields.number}
              position={[
                station.fields.position[0],
                station.fields.position[1],
              ]}
              icon={handleMarkerColor(
                station.fields.available_bikes,
                station.fields.available_bike_stands,
                colorMarkerFilter
              )}
            >
              <Popup>
                {station.fields.address}
                <br />
                {station.fields.available_bikes} bikes available
                <br />
                {station.fields.available_bike_stands} stands available
                <br />
                <button
                  type="button"
                  onClick={() =>
                    SearchService.setStartPoint(station.fields.position)
                  }
                >
                  Utiliser comme départ
                </button>
                <br />
                <button
                  type="button"
                  onClick={() =>
                    SearchService.setEndPoint(station.fields.position)
                  }
                >
                  Utiliser comme arrivé
                </button>
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
      <button
        type="button"
        onClick={() => {
          SearchService.deleteRoute();
        }}
      >
        Remove
      </button>
    </>
  );
};

export default Map;
