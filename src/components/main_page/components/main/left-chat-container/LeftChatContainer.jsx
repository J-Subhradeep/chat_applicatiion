import { Avatar, Badge, Divider, Fab, InputBase, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Paper, Typography } from '@mui/material';
import React, { useRef, useState, useEffect } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Navigation, North } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
const LeftChatContainer = () => {
    const contacts = [
        { id: 1, name: 'John Doe', lastChat: 'Hey, how are you?', unseenCount: 2, lastChatTime: '10:30 AM' },
        { id: 2, name: 'Jane Smith', lastChat: 'Let’s catch up later!', unseenCount: 2, lastChatTime: '09:15 AM' },
        { id: 3, name: 'Rane Smith', lastChat: 'Let’s catch up later!', unseenCount: 2, lastChatTime: '09:15 AM' }
    ];
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const handleListItemClick = (index) => {
        setSelectedIndex(index);
    };
    const [searchTerm, setSearchTerm] = React.useState('');

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );


    const divRef = useRef(null);
    const [showButton, setShowButton] = useState(false);

    const scrollToTop = () => {
        divRef.current.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    const handleScroll = () => {
        if (divRef.current.scrollTop > 200) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };
    useEffect(() => {
        const div = divRef.current;
        div.addEventListener('scroll', handleScroll);
        return () => {
            div.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className='left-container' ref={divRef}>
            <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "90%", margin: "20px auto", boxSizing: "border-box" }}>
                <SearchIcon />
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Contacts"
                    inputProps={{ 'aria-label': 'search contacts' }}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </Paper>
            <List>
                {filteredContacts.map(contact => (
                    <div key={contact.id}>
                        <Divider />
                        <ListItemButton key={contact.id} alignItems="flex-start" selected={contact.id == selectedIndex} onClick={() => handleListItemClick(contact.id)}>
                            <ListItemAvatar>
                                <Avatar>{contact.name.charAt(0)}</Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={contact.name}
                                secondary={
                                    <>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            {contact.lastChat}
                                        </Typography>
                                        {" — " + contact.lastChatTime}
                                    </>
                                }
                            />
                            {contact.unseenCount > 0 && (
                                <Badge badgeContent={contact.unseenCount} color="primary" style={{ margin: "auto" }} />
                            )}
                        </ListItemButton>
                    </div>
                ))}
            </List>
            <AnimatePresence>
                {showButton && (

                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.2 }} style={{ position: "absolute", bottom: 10, left: "67px", }}>

                        <Fab variant="circular" color="primary" onClick={scrollToTop} size='small'>
                            <North />
                        </Fab>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default LeftChatContainer