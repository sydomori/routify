import {MapContainer, TileLayer} from 'react-leaflet'
import TruckMarker from './TruckMarker'

{/* import leaflet stylesheet for zoom buttons popups and markers */}
import 'leaflet/dist/leaflet.css'

{/* import leaflet marker icons */}
import L from 'leaflet'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

{/* set default icon and shadow for leaflet markers */}
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
    iconUrl: markerIcon.src,
    shadowUrl: markerShadow.src,
})

{/* coordinates for Nairobi as control point */}
const NAIROBI = [-1.2921, 36.8219]

function MapView ({trucks, selectedTruckId}){
    return(
        /* root leaflet component that creates the actual map instance */
        <MapContainer center={NAIROBI} zoom={12} style={{width:'100%', height:'100%'}}>
            /* fetches and displays the atual map images */
            /* s = subdomains for map tiles */
            /* z = zoom level */
            /* x = x coordinate */
            /* y = y coordinate */
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution= "&copy; OpenStreetMap contributors"
          />
           /* loop through each truck in the array and render a truck marker for each */
          {trucks.map(truck => (
            <TruckMarker key={truck.id} truck={truck} isSelected={truck.id === selectedTruckId} />
          ))}
        </MapContainer>
    )
}