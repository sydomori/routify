import {useState} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import SearchIcon from '@mui/icons-material/Search'
import FilterListIcon from '@mui/icons-material/FilterList'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import dashboardLogo from '../../public/dashboardLogo.svg'
import analyticsLogo from '../../public/analyticsLogo.svg'


function AppBar(){
    const navigate = useNavigate()
    const location = useLocation()
    const currentTab = location.pathname === '/analytics' ? 1 : 0

    const handleTabChange = (event, newValue) => {
        if (newValue === 0) {
            navigate('/')
        } else {
            navigate('/analytics')
        }
    }

    return (
        <MuiAppBar position="fixed" sx={{backgroundColor: '#040406', zIndex: 1300}}>
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between', gap: 2}}>
                {/* Logo */}
                <Box sx={{display: 'flex', alignItems: 'center', gap: 1, minWidth: 140}}>
                    <LocalShippingIcon sx={{color: '#e1e1e1'}} />
                    <Typography variant='h6' sx={{color: '#fff', fontWeight:700, letterSpacing:1}}>
                        Routeify
                    </Typography>
                </Box>
                {/* Navigation Tabs */}
                <Tabs value={currentTab} onChange={handleTabChange} textColor="inherit" slotProps={{indicator: {style: {backgroundColor: '#fff', height: 2}}}}>
                    <Tab label="Dashboard" sx={{color: '#fff',textTransform:'none'}}
                     iconPosition='start'
                     icon={<img src = {dashboardLogo} alt = "Dashboard Logo" style={{width: 20, height: 20, color: '#fff'}} />}>
                    </Tab>
                    <Tab label="Analytics" sx={{color: '#aaa',textTransform:'none'}}
                     iconPosition='start'
                     icon={<img src = {analyticsLogo} alt = "Analytics Logo" style={{width: 20, height: 20, color: '#fff'}} />}
                    >
                        
                    </Tab>
                </Tabs>
                {/* Search Bar */}
                <Box sx={{display: 'flex', alignItems: 'center', backgroundColor: '#fff', borderRadius: 5, px: 2, py: 0.5, flexGrow:1, maxWidth: 400}}>
                    <SearchIcon sx={{color: '#aaa', mr: 1}} />
                    <InputBase placeholder="Search Truck ID or driver" sx={{color: '#000000', width: '100%'}} />
                </Box>
                {/* Right Icons */}
                <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                    <IconButton sx={{color: '#fff'}}>
                        <FilterListIcon />
                    </IconButton>
                    <Avatar sx={{width: 32, height: 32, bgcolor: '##3f51b5', fontSize:14}}>
                        Syd
                    </Avatar>
                </Box>
            </Toolbar>
        </MuiAppBar>
    )
}

export default AppBar