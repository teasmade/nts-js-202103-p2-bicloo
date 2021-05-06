// Import Modules
import React, { useState, useEffect } from 'react';
import { Map as MapContainer, ZoomControl } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import axios from 'axios';

// Import Tools
import UserService from '../../Services/UserService';
import SearchService from '../../Services/SearchService';
import {
  createClusterCustomIcon,
  userIcon,
  redMarker,
  orangeMarker,
  yellowMarker,
  greenMarker,
} from './CustomIcon';

// Import Styles
import './style/Map.css';
import './style/CustomIcon.css';
import 'react-leaflet-markercluster/dist/styles.min.css';

// Import Components
import Search from './Search';
import Routing from './Routing';
import TileLayerComponent from './Tiles';
import StationsMarkers, { UserMarker } from './MarkersComponent';
import PopUp from './popup/PopUp';
import ValidationBtn from './ValidationBtn';
import ToogleFilter from './ToogleFilter';

const Map = () => {
  // Get API response
  const [apiResponse, setApiResponse] = useState([]);

  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const [popupDisplayed, setPopupDisplayed] = useState('');
  const [showValidation, setShowValidation] = useState(false);

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
          apiResponse
        )
      );
    if (searchStatus === 'to')
      setResultStations(
        SearchService.calculateDistanceToStation(
          SearchService.endPoint,
          apiResponse
        )
      );
  }, [coordinates]);

  // userToStationDistance [depart, destination]
  const userToStationDistance = [null, null];

  // Get user position and change the userPostion state
  const [userPosition, setUserPosition] = useState(defaultPosition);
  const getUserPosition = (lat, long) => {
    setUserPosition([lat, long]);
  };

  useEffect(() => {
    // API call
    const apiUrl =
      'https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_stations-velos-libre-service-nantes-metropole-disponibilites&q=&rows=150&facet=status&exclude.status=CLOSED';
    axios.get(apiUrl).then((response) => {
      const recordsArray = response.data.records;
      setApiResponse(
        recordsArray.filter(
          (record) => !record.fields.name.includes('BORNE TEST')
        )
      );
    });

    // Location API call
    navigator.geolocation.getCurrentPosition(
      (position) =>
        getUserPosition(position.coords.latitude, position.coords.longitude),
      () => defaultPosition
    );
  }, []);

  // Check user distance w/ selected stations to validate xp
  useEffect(() => {
    const checkPosition = setInterval(() => {
      if (SearchService.startStation) {
        userToStationDistance[0] = SearchService.convertToMetres(
          ...userPosition,
          ...SearchService.startStation
        );
      }
      if (SearchService.endStation) {
        userToStationDistance[1] = SearchService.convertToMetres(
          ...userPosition,
          ...SearchService.endStation
        );
      }

      // Validate XP w/ distance condition
      if (userToStationDistance[0] && userToStationDistance[0] < 100) {
        setPopupDisplayed('addXp');
        setPopupIsOpen(true);
        // Add XP to user count
        if (UserService.getUser()) UserService.addXp(SearchService.startXp);
        SearchService.setStartStation(null);
        userToStationDistance[0] = null;
        SearchService.setStartXp(null);
      }
      if (userToStationDistance[1] && userToStationDistance[1] < 100) {
        setPopupDisplayed('addXp');
        setPopupIsOpen(true);
        // Add XP to user count
        if (UserService.getUser()) UserService.addXp(SearchService.endXp);
        SearchService.setEndStation(null);
        userToStationDistance[1] = null;
        SearchService.setEndXp(null);
      }
    }, 5000);
    return () => clearInterval(checkPosition);
  }, [userPosition]);

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
            setPopupDisplayed('results-from');
            setPopupIsOpen(!popupIsOpen);
            setShowValidation(true);
          }}
        />
        <Search
          fromTo="to"
          update={() => {
            setSearchStatus('to');
            setCoordinates(SearchService.getCoordinates());
            setPopupDisplayed('results-to');
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
            stationsArray={apiResponse}
            handleMarkerColor={handleMarkerColor}
            colorMarkerFilter={colorMarkerFilter}
            setCoordinates={setCoordinates}
            setPopupIsOpen={setPopupIsOpen}
            setPopupDisplayed={setPopupDisplayed}
          />
        </MarkerClusterGroup>
      </MapContainer>
      <PopUp
        list={resultStations}
        setCoordinates={setCoordinates}
        popupIsOpen={popupIsOpen}
        setPopupIsOpen={setPopupIsOpen}
        popupDisplayed={popupDisplayed}
        setShowValidation={setShowValidation}
      />
      {showValidation ? (
        <ValidationBtn
          setPopupDisplayed={setPopupDisplayed}
          setPopupIsOpen={setPopupIsOpen}
        />
      ) : null}
      <ToogleFilter
        colorMarkerFilter={colorMarkerFilter}
        setColorMarkerFilter={setColorMarkerFilter}
      />
    </>
  );
};

export default Map;
