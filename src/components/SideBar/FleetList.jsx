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
        <Box sx={{p:2, borderBottom:'1px solid #e0e0e0'}}>
            {/* Header */}
            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems:'center, mb:2'}}>
                <Typography variant="subtitle1" fontWeight={700}>
                    Fleet List
                </Typography>
                <Typography variant="caption" sx={{color: '#888'}}>
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