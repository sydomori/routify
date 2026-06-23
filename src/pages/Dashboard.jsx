import Toolbar from '@mui/material/Toolbar'
import SideBar from '../components/SideBar/SideBar'
import Box from '@mui/material/Box'
function Dashboard({trucks, selectedTruckId, setSelectedTruckId, modalOpen, setModalOpen}){
    return(
        <Box sx={{display: 'flex', flexDirection: 'column', overflow: 'hidden', height:'100vh'}}>
            <Toolbar />
            <Box style={{display: 'flex',flex:1, overflow: 'hidden'}}>
                <SideBar trucks={trucks} selectedTruckId={selectedTruckId} setSelectedTruckId={setSelectedTruckId} />
                {/* MapPanel goes here */}
                {/* AddTruckModal goes here */}
            </Box>
        </Box>
    )
}

export default Dashboard