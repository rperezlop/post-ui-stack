import React from "react";
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import { useAuth0 } from "@auth0/auth0-react";


const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    
    isAuthenticated && (
      <div>
         <Chip
        avatar={<Avatar alt="Natacha" size='medium' src={user.picture}/>}
        label={user.name}
        variant="outlined"
        sx={{
            color: '#FFFFFF'  
        }}
      />    
      </div>
    )
  );
};




export default Profile;