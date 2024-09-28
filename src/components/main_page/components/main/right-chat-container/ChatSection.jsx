/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import { Avatar, IconButton, Typography, InputBase } from '@mui/material';
import { Search, AttachFile, MoreVert, EmojiEmotions, Send } from '@mui/icons-material';
import ChatSectionHeader from './components/ChatSectionHeader';
import MessagesContainer from './components/MessagesContainer';


const ChatSection = () => {
    return (
        <><div className='right-container'>


            <ChatSectionHeader />

            <MessagesContainer />
        </div>
        </>
    );
};

export default ChatSection;
