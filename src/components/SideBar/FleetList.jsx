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
            <Box sx={{display:'flex',alignItems:'center', backgroundColor: '#f5f5f5', borderRadius: 2, px:1.5, py:0.5, mb:1.5 }}>
                <SearchIcon sx={{color: '#aaa', mr:1, fontSize: 18}} />
                <InputBase placeholder="Filter by truck or driver" value={filter} onChange={e => setFilter(e.target.value)} sx={{width:'100%', fontSize: 14}} autoComplete="on" />
            </Box>

            {/* Truck Cards */}
            <Box sx={{display:'flex', flexDirection:'column', gap:1}}>
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