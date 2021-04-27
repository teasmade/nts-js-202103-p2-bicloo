import { MapLayer, withLeaflet } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';

class Routing extends MapLayer {
  createLeafletElement() {
    const { map } = this.props.leaflet;
    const leafletElement = L.Routing.control({
      waypoints: [
        L.latLng(47.2076056402, -1.55753246891),
        L.latLng(47.2076056405, -1.55753246771),
      ],
      show: false,
      itineraryBuilder: false,
      itineraryFormatter: null,
    }).addTo(map);
    return leafletElement.getPlan();
  }
}
export default withLeaflet(Routing);
