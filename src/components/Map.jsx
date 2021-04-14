import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
  useMapEvent,
} from 'react-leaflet';
import { useState, useEffect } from 'react';

import sampleStations from '../data/sampleStations';
import '../style/Map.css';
import CustomIcon from './CustomIcon';

// Nantes "position": [47.2076056402, -1.55753246791]
// To transform into "click to center button"
function MyComponent(props) {
  const map = useMapEvent('click', () => {
    map.setView(props.userPosition);
  });
  return null;
}

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

  return (
    <MapContainer center={userPosition} zoom={14} scrollWheelZoom>
      <MyComponent userPosition={userPosition} />
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="OpenStreetMap.Base">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer checked name="OpenStreetMap.Cycle">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
      </LayersControl>
      <Marker className="testMarker" position={userPosition} icon={CustomIcon}>
        <Popup>This is our test position marker</Popup>
      </Marker>

      {sampleStations.map((station) => (
        <Marker
          key={station.fields.number}
          position={[station.fields.position[0], station.fields.position[1]]}
        >
          <Popup>
            {station.fields.address}
            <br />
            {station.fields.available_bikes} bikes available
            <br />
            {station.fields.available_bike_stands} stands available
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
