
import React from 'react';
import styled from '@emotion/styled';
import { Avatar, IconButton, Typography } from '@mui/material';
import { Search, AttachFile, MoreVert } from '@mui/icons-material';

const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #eaeaea;
  border-bottom: 1px solid #e0e0e0;
  /* margin-top: 68px; */

`;

const ProfilePic = styled(Avatar)`
  margin-right: 10px;
`;

const ContactInfo = styled.div`
  flex-grow: 1;
`;

const HeaderIcons = styled.div`
  display: flex;
  align-items: center;
`;

const ChatSectionHeader = () => {
    return (
        <ChatHeader>
            {/* <ProfilePic src="profile.jpg" /> */}
            <Avatar style={{marginRight:"10px"}}>{"Contact".charAt(0)}</Avatar>
            <ContactInfo>
                <Typography variant="h6">Contact Name</Typography>
                <Typography variant="body2">Online</Typography>
            </ContactInfo>
            <HeaderIcons>
                <IconButton><Search /></IconButton>
                <IconButton><AttachFile /></IconButton>
                <IconButton><MoreVert /></IconButton>
            </HeaderIcons>
        </ChatHeader>
    );
};

export default ChatSectionHeader;
