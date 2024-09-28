import { ChatTwoTone } from '@mui/icons-material'
import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import SideNav from './components/sidebar/SIdeNav'
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom'
import ChatPage from './components/main/ChatPage'
import SettingsPage from './components/settings/SettingsPage'

const Main = () => {
    return (
        <div style={{ overflow: "hidden" }}>
            <AppBar position="static" color='white' style={{ minWidth: 800, boxShadow: "none", borderBottom: "1px solid #c8c8c8" }} >
                <Toolbar>
                    <ChatTwoTone color='primary' style={{ marginRight: "10px" }} />{" "}
                    <Typography variant="h6" color='primary'>
                        Let's Talk
                    </Typography>
                </Toolbar>
            </AppBar>
            <SideNav />
            <Outlet/>
        </div>
    )
}

export default Main