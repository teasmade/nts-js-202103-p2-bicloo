import { useMap } from 'react-leaflet';
import { useEffect } from 'react';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import { redMarker } from './CustomIcon';
import SearchService from '../../Services/SearchService';

import 'leaflet-geosearch/dist/geosearch.css';

function LeafletgeoSearch(props) {
  const map = useMap();
  useEffect(() => {
    const provider = new OpenStreetMapProvider({
      params: {
        countrycodes: 'fr',
        viewbox: [-1.6428, 47.1567, -1.4556, 47.26],
        bounded: 1,
      },
    });

    const searchControl = new GeoSearchControl({
      provider,
      marker: {
        redMarker,
      },
    });
    map.addControl(searchControl);
    map.on('geosearch/showlocation', (data) => {
      if (props.whichBar === 'from')
        SearchService.setStartPoint([data.location.y, data.location.x]);
      if (props.whichBar === 'to')
        SearchService.setEndPoint([data.location.y, data.location.x]);
    });

    return () => map.removeControl(searchControl);
  }, []);

  return null;
}

export default LeafletgeoSearch;
