import{Marker, Popup} from 'react-leaflet'
import L from 'leaflet'

const selectedIcon = new L.Icon({ /* Leaflet's class for creating custom marker icons */
    iconUrl: '...', /* path to the icon image */
    shadowUrl: '...', /* path to the shadow image */
    iconSize: [30,46], /* width and height of the icon image in pixels */
    iconAnchor: [15,46], /* anchor point of the icon in pixels, relative to the top left corner of the icon image */
    popupAnchor: [0,-46] /* anchor point of the popup in pixels, relative to the top left corner of the icon image */
})

const defaultIcon = new L.Icon({ /* Leaflet's class for creating custom marker icons */
    iconUrl: '...', /* path to the icon image */
    shadowUrl: '...', /* path to the shadow image */
    iconSize: [20,32], /* smaller that the selected icon to be distinct */
    iconAnchor: [10,32], /* anchor point of the icon in pixels, relative to the top left corner of the icon image */
    popupAnchor: [0,-32] /* anchor point of the popup in pixels, relative to the top left corner of the icon image */
})

function TruckMarker ({truck, isSelected}) {
    return (
      <Marker position={[truck.lat, truck.lng]} icon={isSelected ? selectedIcon : defaultIcon}>
        <Popup>
            <strong>{truck.id}</strong><br />
            {truck.driver}<br />
            Status: {truck.status} <br />
            Speed: {truck.speed} km/h
        </Popup>
      </Marker>
    )
}