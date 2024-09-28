import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import SideNav from '../sidebar/SIdeNav';
import { Chat, ChatBubble, ChatRounded, ChatTwoTone } from '@mui/icons-material';
import { ContainerDiv } from './styles/ContainerDiv';
import LeftChatContainer from './left-chat-container/LeftChatContainer';
import ChatSection from './right-chat-container/ChatSection';


const ChatPage = () => {
    return (


            <ContainerDiv>
                {/* Main content goes here */}
                <LeftChatContainer />
                
                    <ChatSection />
                
            </ContainerDiv>

    );
};

export default ChatPage;
