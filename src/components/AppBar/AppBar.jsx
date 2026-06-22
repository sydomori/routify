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
            <Toolbar>
                {/* Logo */}
                <Box>
                    <LocalShippingIcon />
                    <Typography></Typography>
                </Box>
                {/* Navigation Tabs */}
                <Tabs>
                    <Tab></Tab>
                    <Tab></Tab>
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