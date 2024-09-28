import React, { useState } from 'react';
import { Avatar, Button, TextField, Typography, Switch, Divider, Box, Container, IconButton, styled } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import { ContainerDiv } from './SettingPageStyles';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});
const SettingsPage = () => {
    const [username, setUsername] = useState('John Doe');
    const [status, setStatus] = useState('Available');
    const [lastSeen, setLastSeen] = useState(true);
    const [profilePhotoPrivacy, setProfilePhotoPrivacy] = useState(true);
    const [statusPrivacy, setStatusPrivacy] = useState(true);
    
    const handleImageUpload = (e) => {
        // Handle image upload functionality here
    };

    return (
        <ContainerDiv>
            <div>

                {/* <Typography variant="h5" gutterBottom>
                    Profile Settings
                </Typography> */}

                {/* Profile Picture */}
                <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
                    <Avatar sx={{ width: 100, height: 100 }} src="/profile-pic.jpg" alt="Profile Picture" />
                    <IconButton
                        // variant="contained"
                        color='primary'
                        component="label"

                        sx={{ marginLeft: 2 }}
                    >
                        {/* Upload */}
                        <PhotoCamera />
                        <VisuallyHiddenInput type="file" hidden onChange={handleImageUpload} />
                    </IconButton>
                </Box>

                {/* Username */}
                <TextField
                    fullWidth
                    label="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    margin="normal"
                />

                {/* Status */}
                <TextField
                    fullWidth
                    label="Status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    margin="normal"
                />

            </div>
            <div>

                {/* <Divider sx={{ marginY: 3 }} /> */}

                {/* Privacy Settings */}
                <Typography variant="h6" gutterBottom>
                    Privacy Settings
                </Typography>
                <Divider sx={{ marginY: 3 }} />

                <Box display="flex" justifyContent="space-between" alignItems="center" my={1}>
                    <Typography>Show Last Seen</Typography>
                    <Switch
                        checked={lastSeen}
                        onChange={() => setLastSeen(!lastSeen)}
                    />
                </Box>

                <Box display="flex" justifyContent="space-between" alignItems="center" my={1}>
                    <Typography>Show Profile Picture</Typography>
                    <Switch
                        checked={profilePhotoPrivacy}
                        onChange={() => setProfilePhotoPrivacy(!profilePhotoPrivacy)}
                    />
                </Box>

                <Box display="flex" justifyContent="space-between" alignItems="center" my={1}>
                    <Typography>Show Status</Typography>
                    <Switch
                        checked={statusPrivacy}
                        onChange={() => setStatusPrivacy(!statusPrivacy)}
                    />
                </Box>

                <Divider sx={{ marginY: 3 }} />

                {/* Save Button */}
                <div style={{width:"100%"}}>

                    <Button variant="contained" color="primary" style={{marginLeft:"50%", transform:"translate(-50%, 0)"}}>
                        Save Changes
                    </Button>
                </div>
            </div>
        </ContainerDiv>
    );
};

export default SettingsPage;
