import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const LogoutButton = () => {
    const { logout, user, isAuthenticated, isLoading } = useAuth0();
    if (isLoading) {
        return <div>Loading ...</div>;
    }
    return (

        isAuthenticated && (
            <div>
                <Stack direction="row" spacing={2}>
                    <Chip
                        avatar={<Avatar alt="Natacha" size='medium' src={user.picture} />}
                        label={user.name}
                        variant="outlined"
                        sx={{
                            color: '#FFFFFF',
                            zize: 20
                        }}
                    />
                    <Chip
                        label="Log Out"
                        component="a"
                        variant="outlined"
                        onClick={() => logout({ returnTo: window.location.origin })}
                        clickable
                        sx={{
                            color: '#FFFFFF'
                        }} />

                </Stack>
            </div>
        )

    );
};

export default LogoutButton;