import Toolbar from '@mui/material/Toolbar'
import SideBar from '../components/SideBar/SideBar'
function Dashbord({trucks, selectedTruckId, setSelectedTruckId, modalOpen, setModalOpen}){
    return(
        <>
            <Toolbar />
            <div style={{display: 'flex', height: 'calc(100vh - 64px)'}}>
                <SideBar trucks={trucks} selectedTruckId={selectedTruckId} setSelectedTruckId={setSelectedTruckId} />
                {/* MapPanel goes here */}
                {/* AddTruckModal goes here */}
            </div>
        </>
    )
}

export default Dashbord