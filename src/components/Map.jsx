import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
} from 'react-leaflet';

import sampleStations from '../data/sampleStations';
import '../style/Map.css';
import CustomIcon from './CustomIcon';

// Nantes "position": [47.2076056402, -1.55753246791]
// "https://{s}.tile-cyclos.openstreetmap.fr/{z}/{x}/{y}.png"

const Map = () => {
  const defaultPosition = [47.2076056402, -1.55753246791];
  const testPosition = [47.21, -1.552];

  return (
    <MapContainer center={defaultPosition} zoom={14} scrollWheelZoom>
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
      <Marker className="testMarker" position={testPosition} icon={CustomIcon}>
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
