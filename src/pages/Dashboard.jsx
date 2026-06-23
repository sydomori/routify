import Toolbar from '@mui/material/Toolbar'
function Dashbord({trucks, selectedTruckId, setSelectedTruckId, modalOpen, setModalOpen}){
    return(
        <>
            <Toolbar />
            <div style={{display: 'flex', height: 'calc(100vh - 64px)'}}>
                {/* Sidebar content goes here */}
                {/* MapPanel goes here */}
                {/* AddTruckModal goes here */}
            </div>
        </>
    )
}

export default Dashbord