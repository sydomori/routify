import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import SpeedIcon from '@mui/icons-material/Speed'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

function TruckDetailPanel({selectedTruck}){
    if(!selectedTruck) return null

    return(
        <Box>
            <Typography>
                Selected Truck Details
            </Typography>

            <Box>
                {/* truck id + driver */}
                <Typography>{selectedTruck.id}</Typography>
                <Typography>{selectedTruck.driver}</Typography>

                <Divider />

                {/* speed + last updated */}
                <Box>
                    <Box>
                        <SpeedIcon />
                        <Typography>{selectedTruck.speed} km/h</Typography>
                    </Box>
                    <Box>
                        <AccessTimeIcon />
                        <Typography>{selectedTruck.lastUpdated}</Typography>
                    </Box>
                </Box>

                {/* Current trip */}
                {
                    selectedTruck.currentTrip ? (
                        <>
                          <Divider />
                          <Typography>Current Trip</Typography>
                          <Typography>{selectedTruck.currentTrip.origin} - {selectedTruck.currentTrip.destination}</Typography>
                          <Box>
                            <Typography>{selectedTruck.currentTrip.distanceKm} km</Typography>
                            <Typography>{selectedTruck.currentTrip.estimatedHrs} hours</Typography>
                          </Box>
                        </>
                    ) : (
                        <>
                          <Divider />
                          <Typography>No current trip</Typography>
                        </>
                    )
                }

            </Box>
        </Box>
    )

}

export default TruckDetailPanel