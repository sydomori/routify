import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'

const statusColors = {
    active: {bg: '#4CAF50', text: '#fff'}, // Green
    idle: {bg: '#FFC107', text: '#fff'}, // Amber
    offline: {bg: '#F44336', text: '#fff'}, // Red
    // Add more status colors as needed
}

function TruckCard({truck, isSelected, onClick}){
    const {bg, color} = statusColors[truck.status]

    return(
      <Box>
        <Box>
            <Typography></Typography>
            <Typography></Typography>
        </Box>
        <Chip/>
      </Box>
    )
}

export default TruckCard