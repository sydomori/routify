import Box from '@mui/material/Box';
import Typography  from '@mui/material/Typography';
import FleetList from './FleetList';
import TruckDetailPanel from './TruckDetailPanel';

function Sidebar ({trucks, selectedTruckId, setSelectedTruckId}){
    const selectedTruck = trucks.find(truck => truck.id === selectedTruckId);
    return(
        <Box>
            <FleetList trucks={trucks} selectedTruckId={selectedTruckId} setSelectedTruckId={setSelectedTruckId} />
            <TruckDetailPanel selectedTruck={selectedTruck} />
        </Box>
    )
}