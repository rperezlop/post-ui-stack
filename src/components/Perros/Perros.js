
import {Paper} from "@mui/material";
import Container from "@mui/material/Container";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add';
import Divider from '@mui/material/Divider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import {Box, Chip, Stack} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from "react";





const Perros = () => {

  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  return(
     
    <Paper sx={{overflow: 'hidden', margin: 2,mt: 10}}>
            <Container maxWidth="lg" sx={{margin: 1, mt: 4}}>
    <List>
      
       <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AddIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Formato ingreso de paciente" secondary="Gatos/Perros" />
      </ListItem>
    </List>
    <Grid container spacing={2}>
    <Grid item xs={12} sm={4}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker />
        </LocalizationProvider>
    </Grid>
    <Grid item xs={12} sm={4}>
      <TextField id="outlined-basic" label="Numero de caso" variant="standard" fullWidth />
    </Grid>
      </Grid>
    
   

          
          <br></br>
         
          <div>
  <br />
  <Typography sx={{ ml: 3, flex: 1, textAlign: 'center' }} variant="h6" component="div">
    Datos generales
  </Typography>
  <Grid container spacing={2}>
    <Grid item xs={12} sm={4}>
      <TextField id="outlined-basic" label="Municipio" variant="standard" fullWidth />
    </Grid>
    <Grid item xs={12} sm={4}>
      <TextField id="outlined-basic" label="Direccion" variant="standard" fullWidth />
    </Grid>
    <Grid item xs={12} sm={4}>
      <TextField id="outlined-basic" label="Medico" variant="standard" fullWidth />
    </Grid>
    <Grid item xs={12} sm={4}>
      <TextField id="outlined-basic" label="Propietario" variant="standard" fullWidth />
    </Grid>
    <Grid item xs={12} sm={4}>
      <TextField id="outlined-basic" label="Cc" variant="standard" fullWidth />
    </Grid>
    <Grid item xs={12} sm={4}>
      <TextField id="outlined-basic" label="Telefono" variant="standard" fullWidth />
    </Grid>
    <Grid item xs={12} sm={4}>
      <TextField id="outlined-basic" label="Email" variant="standard" fullWidth />
    </Grid>
    
  </Grid><br></br>

  <Typography sx={{ ml: 3, flex: 1, textAlign: 'center' }} variant="h6" component="div">
    Datos del paciente
  </Typography>
</div>
<Divider></Divider><br></br>
<Grid container spacing={2}>
    <Grid item xs={12} sm={4}>
      <TextField id="outlined-basic" label="Especie" variant="standard" fullWidth />
    </Grid>
    <Grid item xs={12} sm={4}>
      <TextField id="outlined-basic" label="Eda aproximada" variant="standard" fullWidth />
    </Grid>
    <Grid item xs={12} sm={4}>
      <TextField id="outlined-basic" label="Sexo" variant="standard" fullWidth />
    </Grid>
    <Grid item xs={12} sm={4}>
      <TextField id="outlined-basic" label="Color" variant="standard" fullWidth />
    </Grid>
    <Grid item xs={12} sm={4}>
      <TextField id="outlined-basic" label="Raza" variant="standard" fullWidth />
    </Grid>
    <Grid item xs={12} sm={4}>
    <FormControl fullWidth variant="standard">
    <InputLabel id="demo-simple-select-label">Vacuna antirrabica</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Age"
    onChange={handleChange}
  >
    <MenuItem value={1}>Si</MenuItem>
    <MenuItem value={2}>No</MenuItem>
    
  </Select>
  </FormControl>
    </Grid>

    <Grid item xs={12} sm={4}>
      <TextField id="outlined-basic" label="Nombre" variant="standard" fullWidth />
    </Grid>
    <Grid item xs={12} sm={4}>
      <TextField id="outlined-basic" label="Fecha de aplicacion" variant="standard" fullWidth />
    </Grid>
    <Grid item xs={12} sm={4}>
      <TextField id="outlined-basic" label="No de microchip" variant="standard" fullWidth />
    </Grid>
    
  </Grid>

    </Container>
    </Paper>
   

  )
}

export default Perros;