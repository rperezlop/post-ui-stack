import React, {useEffect, useState} from 'react';
import {Avatar, Button, Container, CssBaseline, Grid, Link, TextField, Typography} from "@mui/material";
import './login.css';
import {useUser} from '../../context/userContext';
import {useNavigate} from "react-router-dom";
import Box from "@mui/material/Box";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import logo from '../Login/ImgSaso/WM-H-white.png';

const Login = () => {
  const navigate = useNavigate();
  const {session, login} = useUser();
  const [dataForm, setDataForm] = useState({
    user: '',
    password: '',
  });

  useEffect(() => {
    if (session) {
      navigate('/home');
    }
  }, [session]);


  const handleChange = (event) => {
    const {name, value} = event.target;
    setDataForm({...dataForm, [name]: value})
  }

  const handleLogin = (event) => {
    event.preventDefault();
    login(dataForm);
  }

  return (
    <>
        <div className='row'>
          <CssBaseline/>
          <aside>
            <Box sx={{marginTop:2,margin:10, marginLeft:15}}>
              <img
                src={logo}
                alt="cur" className="center"
              />
            </Box>
          </aside>
          <section>
            <Box sx={{marginTop:15}}>
            <Container maxWidth="xs" className='form' >
              <Avatar sx={{marginLeft:14}}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5" sx={{color: '#44505b', textAlign: 'center'}}>
                <strong>Inicio de sesión en el guardián</strong>
              </Typography>
              <br/>
              <form onSubmit={handleLogin}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="user"
                      label="Usuario"
                      name="user"
                      autoComplete="user"
                      autoFocus
                      onChange={handleChange}
                      value={dataForm.user}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Contraseña"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      onChange={handleChange}
                      value={dataForm.name}
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{marginTop: 2, borderRadius: 5, backgroundColor: '#009688 '}}>
                      Ingresar
                    </Button>
                  </Grid>
                </Grid>

                <Grid container sx={{marginTop: 2}}>
                  <Grid item xs>
                    <Link to="/registro" sx={{color: '#5F6A6A', cursor: 'pointer', textDecoration: 'none'}}>
                      {"Olvide la contraseña"}
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to="/registro" sx={{color: '#5F6A6A', cursor: 'pointer', textDecoration: 'none'}}>
                      {"Registrarme"}
                    </Link>
                  </Grid>
                </Grid>
              </form>

            </Container>
            </Box>
          </section>

        </div>
    </>
  )
}


export default Login;