import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';
import SearchService from '../../Services/SearchService';

const Routing = ({ coordinates }) => {
  const [startPoint, startStation, endStation, endPoint] = coordinates;
  console.log(startPoint, startStation, endStation, endPoint);
  const map = useMap();
  const route = L.Routing.control({
    waypoints: [L.latLng(27.67, 85.316), L.latLng(27.68, 85.321)],
  }).addTo(map);
  SearchService.deleteRoute = () => route.remove();

  return null;
};

export default Routing;
