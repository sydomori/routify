import Box from '@mui/material/Box';
import MapView from './MapView';

{/* a wrapper component that holds the map and passes data to MapView */}
function MapPanel({trucks, selectedTruckId}){
    return(
        <Box>
            <MapView trucks={trucks} selectedTruckId={selectedTruckId} />
        </Box>
    )
}