/** @jsxImportSource @emotion/react */

import styled from '@emotion/styled';
import { IconButton, Typography, InputBase, TextField, Fab, CircularProgress, Box } from '@mui/material';
import { AttachFile, EmojiEmotions, Send, South } from '@mui/icons-material';
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { ChatArea, InputArea, Message, SenderName } from '../styles/ChatSectionStyles';



const MessagesContainer = () => {

  const initialMessages = [
    { id: 1, sender: 'John Doe', text: 'Hello!', time: '10:00 AM', sent: false },
    { id: 2, sender: 'John Doe', text: 'Hello!', time: '10:00 AM', sent: false },
    { id: 3, sender: 'John Doe', text: 'Hello!', time: '10:00 AM', sent: false },
    { id: 4, sender: '', text: 'Hi there! how are you, wandojsadfasdf fdasfa its cool Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, inventore?', time: '10:01 AM', sent: true },
    { id: 5, sender: '', text: 't', time: '10:01 AM', sent: true },
    { id: 6, sender: '', text: 'Hi there! how are you, inventore?', time: '10:01 AM', sent: true },
    { id: 7, sender: '', text: 'Hi there! how are you, wandojsadfasdf fdasfa its cool Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, inventore?', time: '10:01 AM', sent: true, ref: true },
  ];


  const [messages, setMessages] = useState(initialMessages);
  const [moreMessageLoading, setMoreMessageLoading] = useState(false);
  const [scrollLim, setScrollLim] = useState(60);
  const addMoreMessages = (newMessages) => {
    setMessages((prevMessages) => [...newMessages, ...prevMessages]);
    setMoreMessageLoading(false);
    setScrollLim(60)
  };

  const messagesEndRef = useRef(null);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToBottomInit = () => {
    messagesEndRef.current?.scrollIntoView();
  };
  const messagesStartRef = useRef(null);
  useEffect(() => {


    scrollToBottomInit();

  }, []);

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    if (scrollTop + clientHeight < scrollHeight - 100) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }

    if (scrollTop < scrollLim) {
      setMoreMessageLoading(true);
      // scrollToBottomInit();
      setScrollLim(-1);
      setTimeout(() => {

        addMoreMessages(messages);
        scrollToBottomInit();

      }, 2000);
    }

  };



  return (
    <div>
      <ChatArea onScroll={handleScroll}>
        {moreMessageLoading && <Box sx={{ display: 'flex', justifyContent: "center", width: "100%", height: "60px", zIndex: 1000000 }}>
          <CircularProgress />
        </Box>}
        {messages.map((message, index) => (
          <Message key={index} sent={message.sent} ref={message.ref ? index == 0 ? messagesStartRef : messagesEndRef : null}>
            {message.sender && <SenderName variant="body2">{message.sender}</SenderName>}
            <Typography>{message.text}</Typography>
            <div style={{display:"flex", justifyContent:"space-between"}}>

            <Typography variant="caption">{message.time} - index:{index} </Typography>
            <span style={{ color: "#1976D2", fontSize:"15px", paddingLeft:"10px"}}>✔</span>
            </div>
          </Message>
        ))}

        <AnimatePresence>
          {showScrollButton && (

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.2 }} style={{ position: "absolute", bottom: 100, right: "30px", zIndex: 10000 }}>

              <Fab variant="circular" color="primary" onClick={scrollToBottom} size='small'>
                <South />
              </Fab>
            </motion.div>
          )}
        </AnimatePresence>
      </ChatArea>

      <InputArea>
        <IconButton color='primary'><EmojiEmotions /></IconButton>
        <TextField multiline fullWidth placeholder="Type a message" maxRows={3} />
        <IconButton color='primary'><AttachFile /></IconButton>
        <IconButton color='primary'><Send /></IconButton>
      </InputArea>
    </div>
  );
};

export default MessagesContainer;
