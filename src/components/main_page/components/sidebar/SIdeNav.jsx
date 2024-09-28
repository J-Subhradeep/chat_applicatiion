import React, { useEffect, useState } from 'react';
import { Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Divider, ListItemButton } from '@mui/material';
import { Home, Info, ContactMail, ChevronLeft, ChevronRight, Settings, ChatBubble, Group, ContactPage } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';

const SideNav = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const handleDrawerToggle = () => {
        setOpen(!open);
    };
    const handleListItemClick = (index) => {
        setSelectedIndex(index);
    };

    useEffect(() => {
        console.log(location);
        if (location.pathname == "/main/chat") setSelectedIndex(0);
        if (location.pathname == "/main/settings") setSelectedIndex(4);
        if (location.pathname == "/main/about") setSelectedIndex(5);
    }, [location])

    return (
        <div style={{ display: 'flex' }}>
            <Drawer
                variant="permanent"
                open={open}
                style={{ overflow: 'hidden' }}
                sx={{

                    width: open ? 200 : 60,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: open ? 200 : 60,
                        boxSizing: 'border-box',
                        transition: 'width 0.3s',
                        marginTop: "64px",
                        // backgroundColor:"primary.main"
                    },
                }}
            >
                <div style={{ display: 'flex', justifyContent: open ? 'flex-end' : 'center', padding: '8px' }}>
                    <IconButton onClick={handleDrawerToggle}>
                        {open ? <ChevronLeft /> : <ChevronRight />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItemButton
                        selected={selectedIndex === 0} style={{ backgroundColor: selectedIndex == 0 ? "#156abf25" : "" }}
                        onClick={() => {
                            handleListItemClick(0)

                            navigate("/main/chat")
                        }}
                    >
                        <ListItemIcon color='primary'><ChatBubble color='primary' /></ListItemIcon>
                        {open && <ListItemText primary="Chats" />}
                    </ListItemButton>
                    <ListItemButton
                        selected={selectedIndex === 1} style={{ backgroundColor: selectedIndex == 1 ? "#156abf25" : "" }}
                        onClick={() => handleListItemClick(1)}
                    >
                        <ListItemIcon color='primary'><Group color='primary' /></ListItemIcon>
                        {open && <ListItemText primary="Groups" />}
                    </ListItemButton>
                    <ListItemButton
                        selected={selectedIndex === 2} style={{ backgroundColor: selectedIndex == 2 ? "#156abf25" : "" }}
                        onClick={() => handleListItemClick(2)}
                    >
                        <ListItemIcon><ContactPage color='primary' /></ListItemIcon>
                        {open && <ListItemText primary="Contacts" />}
                    </ListItemButton>
                </List>

                <List style={{ position: "absolute", bottom: 60, width: "100%" }}>
                    <ListItemButton
                        selected={selectedIndex === 4} style={{ backgroundColor: selectedIndex == 4 ? "#156abf25" : "" }}
                        onClick={() => {
                            handleListItemClick(4)

                            navigate("/main/settings")

                        }}
                    >
                        <ListItemIcon color='primary'><Settings color='primary' /></ListItemIcon>
                        {open && <ListItemText primary="Settings" />}
                    </ListItemButton>
                    <ListItemButton
                        selected={selectedIndex === 5} style={{ backgroundColor: selectedIndex == 5 ? "#156abf25" : "" }}
                        onClick={() => { handleListItemClick(5); navigate("/main/about") }}
                    >
                        <ListItemIcon color='primary'><Info color='primary' /></ListItemIcon>
                        {open && <ListItemText primary="About" />}
                    </ListItemButton>
                    <ListItemButton

                        selected={selectedIndex === 6} style={{ backgroundColor: selectedIndex == 6 ? "#156abf25" : "" }}
                        onClick={() => handleListItemClick(6)}
                    >
                        <ListItemIcon><ContactMail color='primary' /></ListItemIcon>
                        {open && <ListItemText primary="Contact" />}
                    </ListItemButton>
                </List>
            </Drawer>
        </div>
    );
};

export default SideNav;
