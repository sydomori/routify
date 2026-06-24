import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import SpeedIcon from '@mui/icons-material/Speed'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

function TruckDetailPanel({selectedTruck}){
    if(!selectedTruck) return null

    return(
        <Box sx={{p:1}}>
            <Typography variant="subtitle1" fontweight={700} mb={1}>
                Selected Truck Details
            </Typography>

            <Box sx={{boxShadow: '0 1px 5px rgba(0, 0, 0, 0.1)', p:2, backgroundColor: '#fafafa', borderRadius:2, border: '1px solid #e0e0e0'}}>
                {/* truck id + driver */}
                <Typography variant="body1" fontweight={700}>{selectedTruck.id}</Typography>
                <Typography variant="caption" sx={{color: '#888'}}>{selectedTruck.driver}</Typography>

                <Divider sx={{my:1.5}} />

                {/* speed + last updated */}
                <Box sx={{display:'flex', flexDirection:'column', gap:0.5, mb: 1.5}}>
                    <Box sx={{display:'flex', alignItems:'center', gap: 1}}>
                        <SpeedIcon sx={{fontSize: 16, color: '#888'}} />
                        <Typography variant="body2">{selectedTruck.speed} km/h</Typography>
                    </Box>
                    <Box sx={{display:'flex', alignItems:'center', gap: 1}}>
                        <AccessTimeIcon sx={{fontSize: 16, color: '#888'}} />
                        <Typography variant="body2">{selectedTruck.lastUpdated}</Typography>
                    </Box>
                </Box>

                {/* Current trip */}
                {
                    selectedTruck.currentTrip ? (
                        <>
                          <Divider sx={{mb: 1.5}} />
                          <Typography variant="caption" sx={{color: '#888', display:'block', mb: 0.5}}>Current Trip</Typography>
                          <Typography>{selectedTruck.currentTrip.origin} - {selectedTruck.currentTrip.destination}</Typography>
                          <Box sx={{display:'flex', justifyContent: 'space-between', mt: 0.5}}>
                            <Typography variant='caption'>{selectedTruck.currentTrip.distanceKm} km</Typography>
                            <Typography variant='caption'>{selectedTruck.currentTrip.estimatedHrs} hours</Typography>
                          </Box>
                        </>
                    ) : (
                        <>
                          <Divider sx={{mb: 1.5}} />
                          <Typography variant="caption" sx={{color: '#aaa'}}>No current trip</Typography>
                        </>
                    )
                }

            </Box>
        </Box>
    )

}

export default TruckDetailPanel