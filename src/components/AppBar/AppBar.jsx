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
        <MuiAppBar position="fixed" sx={{backgroundColor: '#1a1a2e', zIndex: 1300}}>
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between', gap: 2}}>
                {/* Logo */}
                <Box sx={{display: 'flex', alignItems: 'center', gap: 1, minWidth: 140}}>
                    <LocalShippingIcon sx={{color: '#fff'}} />
                    <Typography variant='h6' sx={{color: '#fff', fontWeight:700, letterSpacing:1}}>
                        Routeify
                    </Typography>
                </Box>
                {/* Navigation Tabs */}
                <Tabs value={currentTab} onChange={handleTabChange} textColor="inherit" TabIndicatorProps={{style: {backgroundColor: '#fff'}}}>
                    <Tab label="Dashboard" sx={{color: '#fff',textTransform:'none'}}></Tab>
                    <Tab label="Analytics" sx={{color: '#aaa',textTransform:'none'}}></Tab>
                </Tabs>
                {/* Search Bar */}
                <Box>
                    <SearchIcon />
                    <InputBase />
                </Box>
                {/* Right Icons */}
                <Box>
                    <IconButton>
                        <FilterListIcon />
                    </IconButton>
                    <IconButton>
                        <Avatar>
                            Syd
                        </Avatar>
                    </IconButton>
                </Box>
            </Toolbar>
        </MuiAppBar>
    )
}