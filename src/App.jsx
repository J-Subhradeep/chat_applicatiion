import { Route, Routes } from "react-router-dom"
import Login from "./components/auth_module/login/Login"
import { createTheme } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import ChatPage from "./components/main_page/components/main/ChatPage";
import SettingsPage from "./components/main_page/components/settings/SettingsPage";
import Main from "./components/main_page/Main";
import AboutPage from "./components/main_page/components/aobut/AboutPage";
import Register from "./components/auth_module/register/Register";
const theme = createTheme();
function App() {


  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<h1>hello</h1>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/main" element={<Main />} >

            <Route path="chat" element={<ChatPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="about" element={<AboutPage />} />
          </Route>


        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
