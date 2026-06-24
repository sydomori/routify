import Toolbar from '@mui/material/Toolbar'
import SideBar from '../components/SideBar/SideBar'
import Box from '@mui/material/Box'
import MapPanel from '../components/MapPanel/MapPanel'
function Dashboard({trucks, selectedTruckId, setSelectedTruckId, modalOpen, setModalOpen}){
    return(
        <Box sx={{display: 'flex', flexDirection: 'column', overflow: 'hidden', height:'100vh',mt:0.4,mb:1}}>
            <Toolbar />
            <Box style={{display: 'flex',flex:1, overflow: 'hidden'}}>
                <SideBar trucks={trucks} selectedTruckId={selectedTruckId} setSelectedTruckId={setSelectedTruckId} />
                <MapPanel trucks={trucks} selectedTruckId={selectedTruckId} />
                {/* AddTruckModal goes here */}
            </Box>
        </Box>
    )
}

export default Dashboard