import Box from '@mui/material/Box';
import MapView from './MapView';

function MapPanel({trucks, selectedTruckId}){
    return(
        <Box>
            <MapView trucks={trucks} selectedTruckId={selectedTruckId} />
        </Box>
    )
}