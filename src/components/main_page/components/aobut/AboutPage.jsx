import React, { useEffect, useRef } from 'react';
import { Container, Typography, Button, Box, Card, CardMedia, CardContent } from '@mui/material';
import { ContainerDiv } from './AboutPageStyles';
import Typed from 'typed.js';

const AboutPage = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Hello, World!', 'Welcome to my site!', 'Enjoy your stay!'],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <ContainerDiv>
      <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {/* Welcome to ChatApp */}
          <span ref={el}></span>
        </Typography>
        <Card>
          <CardMedia
            component="img"
            alt="ChatApp"
            height="500"
            image="/application_logo.jpeg"
            title="ChatApp"
          />
          <CardContent>
            <Typography variant="body1" paragraph>
              ChatApp is your go-to application for seamless and secure messaging. Connect with friends and family instantly.
            </Typography>
          </CardContent>
        </Card>
        <Box mt={4}>
          <Button variant="contained" color="primary" href="/register" style={{ margin: '10px' }}>
            Sign Up
          </Button>
          <Button variant="contained" color="secondary" href="/login" style={{ margin: '10px' }}>
            Log In
          </Button>
          <Button variant="contained" color="default" href="/features" style={{ margin: '10px' }}>
            Features
          </Button>
          <Button variant="contained" color="default" href="/contact" style={{ margin: '10px' }}>
            Contact Us
          </Button>
        </Box>
      </Container>
    </ContainerDiv>
  );
};

export default AboutPage;
