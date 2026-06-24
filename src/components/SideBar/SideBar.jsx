import Box from '@mui/material/Box';
import Typography  from '@mui/material/Typography';
import FleetList from './FleetList';
import TruckDetailPanel from './TruckDetailPanel';

function Sidebar ({trucks, selectedTruckId, setSelectedTruckId}){
    const selectedTruck = trucks.find(truck => truck.id === selectedTruckId);
    return(
        <Box sx={{width:300,pl:1,pt:1,pb:2, minWidth: 280, height:'100%', display:'flex', flexDirection:'column', gap:1, backgroundColor: '#fff', overflowY: 'auto'}}>
            <FleetList trucks={trucks} selectedTruckId={selectedTruckId} setSelectedTruckId={setSelectedTruckId} />
            <TruckDetailPanel selectedTruck={selectedTruck} />
        </Box>
    )
}

export default Sidebar