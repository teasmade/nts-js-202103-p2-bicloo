import { Icon, divIcon, point } from 'leaflet';
import customMarker from './Icons/person.svg';
import red from './Icons/red-marker.svg';
import orange from './Icons/orange-marker.svg';
import yellow from './Icons/yellow-marker.svg';
import green from './Icons/green-marker.svg';

const CustomIcon = Icon.extend({
  shadowUrl: './leaf-shadow.png',

  iconSize: [38, 38], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [38, 38], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62], // the same for the shadow
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
  className: 'markers-icon',
});

export const redMarker = new CustomIcon({ iconUrl: red });
export const orangeMarker = new CustomIcon({ iconUrl: orange });
export const yellowMarker = new CustomIcon({ iconUrl: yellow });
export const greenMarker = new CustomIcon({ iconUrl: green });

export const userIcon = new CustomIcon({ iconUrl: customMarker });

export const createClusterCustomIcon = (cluster) => {
  const count = cluster.getChildCount();
  let size = null;
  const iconSize = {};

  if (count <= 3) {
    size = 'Small cluster-icons';
    iconSize.size = point(30, 30, true);
  }
  if (count >= 4 && count <= 6) {
    size = 'Medium cluster-icons';
    iconSize.size = point(40, 40, true);
  }
  if (count >= 7 && count <= 10) {
    size = 'Large cluster-icons';
    iconSize.size = point(60, 60, true);
  }
  if (count > 10) {
    size = 'XLarge cluster-icons';
    iconSize.size = point(80, 80, true);
  }

  const sizeClass = `marker-cluster-${size}`;

  return divIcon({
    html: `<span>${cluster.getChildCount()}</span>`,
    className: `${sizeClass}`,
    iconSize: point(iconSize.size),
  });
};

export default userIcon;
