import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LoginButton from '../Login/login';
import LogoutButton from '../Logout/Logout';
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>         
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
           PRUEBA TECNICA
          </Typography>
          {isAuthenticated ? <>
            <LogoutButton />
          </>
            :
            <LoginButton />
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Header;