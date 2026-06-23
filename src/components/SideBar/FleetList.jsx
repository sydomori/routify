import {useState} from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import TruckCard from './TruckCard.jsx'

function FleetList({trucks, selectedTruckId, setSelectedTruckId}){
    const [filter, setFilter] = useState('')

    const filteredTrucks = trucks.filter(truck=>
        truck.id.toLowerCase().includes(filter.toLowerCase()) ||
        truck.driver.toLowerCase().includes(filter.toLowerCase())
    )
    
    return(
        <Box>
            {/* Header */}
            <Box>
                <Typography>
                    Fleet List
                </Typography>
                <Typography>
                    {trucks.length} trucks
                </Typography>
            </Box>

            {/* Filter Input */}
            <Box>
                <SearchIcon />
                <InputBase />
            </Box>

            {/* Truck Cards */}
            <Box>
                {filteredTrucks.map(truck => (
                    <TruckCard 
                     key = {truck.id}
                     truck = {truck}
                     isSelected={truck.id === selectedTruckId}
                     onClick={() => setSelectedTruckId(truck.id)}
                    />
                ))}
            </Box>
        </Box>
    )
}

export default FleetList