import React from "react";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useAuth0 } from "@auth0/auth0-react";


const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Stack direction="row" spacing={1}>
      <Chip 
      label="Iniciar sesión" 
      component="a"
      onClick={() => loginWithRedirect( )}
      clickable
      sx={{
        color: '#FFFFFF'        
      }} />
    </Stack>


  )
};





export default LoginButton;