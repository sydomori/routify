import Box from '@mui/material/Box';
import MapView from './MapView';

{/* a wrapper component that holds the map and passes data to MapView */}
function MapPanel({trucks, selectedTruckId}){
    return(
        <Box sx={{flex:1, position:'relative', height:'100%'}}>
            <MapView trucks={trucks} selectedTruckId={selectedTruckId} />
        </Box>
    )
}

export default MapPanel