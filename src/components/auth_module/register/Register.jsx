import { useState } from 'react';
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Paper, Box, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid2';
import { LinkStyle } from '../styles/LoginPageStyles';
import { form } from 'framer-motion/client';
import styled from '@emotion/styled';
const CustomGrid = styled(Grid)`
  overflow-y: auto;
  padding: 30px;
  /* max-height: 400px; Adjust as needed */
  &::-webkit-scrollbar {
    width: 0px;
  }
`;

function Login() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        password: '',
        cpassword: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    return (

        <CustomGrid container component="main" alignItems={'center'} justifyContent={"center"} height={"100vh"} className='register-container'>
            <CssBaseline />
            <Grid
                item="true"
                // xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: 'url(https://source.unsplash.com/random)',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            <Grid item="true" xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box
                    sx={{
                        my: 4,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        maxWidth: "400px"
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign Up
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }} method='post'>
                        {/* <form onSubmit={handleSubmit}> */}
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="Full Name"
                                name="name"
                                autoComplete="name"
                                autoFocus
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                type='email'
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                type='password'
                                id="cpassword"
                                label="Confirm Password"
                                name="cpassword"
                                autoComplete="cpassword"
                                autoFocus
                                value={formData.cpassword}
                                onChange={handleChange}
                            />
                            {/* <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            /> */}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Register
                            </Button>
                            <LinkStyle width={"100%"}>
                                <div >
                                    <Link to="/login" variant="body2">
                                        Already Have An Account ?
                                    </Link>
                                </div>
                                {/* <div>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </div> */}
                            </LinkStyle>
                        {/* </form> */}
                    </Box>
                </Box>
            </Grid>
        </CustomGrid>

    );
}

export default Login;
