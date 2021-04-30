// Import Modules
import { MapLayer, withLeaflet } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';

class Routing extends MapLayer {
  createLeafletElement() {
    const { map } = this.props.leaflet;
    if (!this.leafletElement) {
      this.leafletElement = L.Routing.control({
        waypoints: this.props.coordinates,
        language: 'fr',
      }).addTo(map);
    }
    return this.leafletElement.getPlan();
  }

  updateLeafletElement() {
    if (this.leafletElement) {
      if (this.props.show) {
        this.leafletElement.setWaypoints(this.props.coordinates);
      } else {
        this.leafletElement.setWaypoints([]);
      }
    }
  }
}

export default withLeaflet(Routing);
