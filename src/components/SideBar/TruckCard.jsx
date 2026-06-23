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
      <Box 
        onClick = {onClick} 
        sx={{p: 1.5, borderradius:2, cursor: 'pointer', backgroundColor: isSelected ? #e8eaf6 : #fafafa,
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        '&:hover': {backgroundColor: '#f0f0f0'}
      }}>
        <Box>
            <Typography variant="body2" fontWeight={700}>{truck.id}</Typography>
            <Typography variant="caption" sx={{color: '#888'}}>{truck.driver}</Typography>
        </Box>
        <Chip 
          label={truck.status.charAt(0).toUpperCase() + truck.status.slice(1)}
          size='small'
          sx={{backgroundColor: bg, color: color, fontWeight: 600, fontSize: 11}}
        />
      </Box>
    )
}

export default TruckCard