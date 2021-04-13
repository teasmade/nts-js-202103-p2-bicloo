import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// import sampleStations from '../data/sampleStations';
import '../style/Map.css';

// Nantes "position": [47.2076056402, -1.55753246791]

const Map = () => {
  const defaultPosition = [47.2076056402, -1.55753246791];
  const testPosition = [47.21, -1.55];

  return (
    <MapContainer center={defaultPosition} zoom={14} scrollWheelZoom>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker className="testMarker" position={testPosition}>
        <Popup>This is our test position marker</Popup>
      </Marker>

      {/* {sampleStations.map((station) => (
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
      ))} */}
    </MapContainer>
  );
};

export default Map;
