// Import Modules
import React, { useState, useEffect } from 'react';
import { Map as MapContainer, ZoomControl } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';

// Import Tools
import SearchService from '../../Services/SearchService';
import {
  createClusterCustomIcon,
  userIcon,
  redMarker,
  orangeMarker,
  yellowMarker,
  greenMarker,
} from './CustomIcon';
import sampleStations from './data/sampleStations';

// Import Styles
import './style/Map.css';
import './style/CustomIcon.css';
import 'react-leaflet-markercluster/dist/styles.min.css';

// Import Components
import Search from './Search';
import Routing from './Routing';
import TileLayerComponent from './Tiles';
import StationsMarkers, { UserMarker } from './MarkersComponent';
import ResultsPopup from './ResultsPopup';

const Map = () => {
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const [searchStatus, setSearchStatus] = useState(null);
  // Nantes "position":
  const defaultPosition = [47.2076056402, -1.55753246791];
  const [coordinates, setCoordinates] = useState([]);
  const [resultStations, setResultStations] = useState([]);
  useEffect(() => {
    if (searchStatus === 'from')
      setResultStations(
        SearchService.calculateDistanceToStation(
          SearchService.startPoint,
          sampleStations
        )
      );
    if (searchStatus === 'to')
      setResultStations(
        SearchService.calculateDistanceToStation(
          SearchService.endPoint,
          sampleStations
        )
      );
  }, [coordinates]);

  // Get user postion and change the userPostion state
  const [userPosition, setUserPosition] = useState(defaultPosition);
  const getUserPosition = (lat, long) => {
    setUserPosition([lat, long]);
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) =>
        getUserPosition(position.coords.latitude, position.coords.longitude),
      () => defaultPosition
    );
  }, []);

  // Handle marker icons colors w/ filter name
  const [colorMarkerFilter, setColorMarkerFilter] = useState('bikes');
  const handleMarkerColor = (availableBikes, availablePlaces, filter) => {
    if (filter === 'bikes') {
      if (availableBikes === 0) return redMarker;
      if (availableBikes <= 4) return orangeMarker;
      if (availableBikes <= 9) return yellowMarker;
    }
    if (filter === 'places') {
      if (availablePlaces === 0) return redMarker;
      if (availablePlaces <= 4) return orangeMarker;
      if (availablePlaces <= 9) return yellowMarker;
    }
    return greenMarker;
  };

  return (
    <>
      <MapContainer
        center={defaultPosition}
        zoom={13}
        maxZoom={17}
        scrollWheelZoom
        tap={false}
        zoomControl={false}
        attributionControl={false}
      >
        <TileLayerComponent tile="AliadeSmoothDark" />
        <ZoomControl position="topright" />
        <Search
          fromTo="from"
          update={() => {
            setSearchStatus('from');
            setCoordinates(SearchService.getCoordinates());
            setPopupIsOpen(!popupIsOpen);
          }}
        />
        <Search
          fromTo="to"
          update={() => {
            setSearchStatus('to');
            setCoordinates(SearchService.getCoordinates());
            setPopupIsOpen(!popupIsOpen);
          }}
        />
        <Routing show coordinates={coordinates} />
        <UserMarker
          userPosition={userPosition}
          userIcon={userIcon}
          setColorMarkerFilter={setColorMarkerFilter}
        />
        <MarkerClusterGroup
          showCoverageOnHover={false}
          iconCreateFunction={createClusterCustomIcon}
        >
          <StationsMarkers
            stationsArray={sampleStations}
            handleMarkerColor={handleMarkerColor}
            colorMarkerFilter={colorMarkerFilter}
            setCoordinates={setCoordinates}
          />
        </MarkerClusterGroup>
      </MapContainer>
      <ResultsPopup
        list={resultStations}
        popupIsOpen={popupIsOpen}
        setPopupIsOpen={setPopupIsOpen}
        setCoordinates={setCoordinates}
      />
    </>
  );
};

export default Map;
