'use client';

import L, { LatLngTuple } from 'leaflet';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Type workaround for _getIconUrl
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
    iconUrl: markerIcon.src,
    iconRetinaUrl: markerIcon2x.src,
    shadowUrl: markerShadow.src,
});

interface MapProps {
  center?: LatLngTuple;
}

const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const Map: React.FC<MapProps> = ({ center }) => {
  const defaultCenter: LatLngTuple = [51, -0.09];
  const mapCenter = center || defaultCenter;

  return (
      <MapContainer 
        key={mapCenter.toString()} // Unique key to remount on center change
        center={mapCenter} 
        zoom={center ? 4 : 2} 
        scrollWheelZoom={false} 
        className="h-[35vh] rounded-lg"
      >
        <TileLayer
          url={url}
          attribution={attribution}
        />
        {center && (
          <Marker position={mapCenter} />
        )}
      </MapContainer>
  );
};

export default Map;
