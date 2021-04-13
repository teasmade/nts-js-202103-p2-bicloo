import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../style/Map.css';

// Nantes "position": [47.2076056402, -1.55753246791]

const Map = () => {
  const position = [47.2076056402, -1.55753246791];

  return (
    <MapContainer center={position} zoom={14} scrollWheelZoom>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
