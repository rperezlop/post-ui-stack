import {FormLabel, Paper, Stack} from "@mui/material";
import Container from "@mui/material/Container";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add';
import Divider from '@mui/material/Divider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useState} from "react";
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';
import * as React from "react";


const Perros = () => {

  const [age, setAge] = useState('');
  const [sexo, setSexo] = useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleChangeSexo = (event) => {
    setSexo(event.target.value);
  };


  return (

    <Paper sx={{overflow: 'hidden', margin: 2, mt: 10, height: '100%'}}>
      <Container maxWidth="lg" sx={{margin: 1, mt: 4}}>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <AddIcon/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Formato ingreso de paciente" secondary="Gatos/Perros"/>
          </ListItem>
        </List>
        <Divider></Divider>
        <br></br>
        <br></br>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField id="outlined-basic" label="Codigo paciente" variant="standard" fullWidth/>
          </Grid>
        </Grid><br></br>
        <Typography sx={{ml: 3, flex: 1, textAlign: 'center'}} variant="h6" component="div">
        Motivos de ingreso
        </Typography>
        <br></br>
        <div>
          <FormControlLabel control={<Checkbox />} label="Atencion/Consulta MV" />
          <FormControlLabel  control={<Checkbox />} label="Uregencia" />
          <FormControlLabel  control={<Checkbox />} label="Cuarentena" />
          <FormControlLabel control={<Checkbox />} label="Esterilizacion" />
        </div>
        <Divider></Divider><br></br>
        <br></br>
        <br/>
        <Typography sx={{ml: 3, flex: 1, textAlign: 'center'}} variant="h6" component="div">
          Datos generales
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField id="outlined-basic" label="Municipio" variant="standard" fullWidth/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField id="outlined-basic" label="Direccion" variant="standard" fullWidth/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField id="outlined-basic" label="Medico" variant="standard" fullWidth/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField id="outlined-basic" label="Propietario" variant="standard" fullWidth/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField id="outlined-basic" label="Cc" variant="standard" fullWidth/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField id="outlined-basic" label="Telefono" variant="standard" fullWidth/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField id="outlined-basic" label="Email" variant="standard" fullWidth/>
          </Grid>

        </Grid><br></br>

        <Typography sx={{ml: 3, flex: 1, textAlign: 'center'}} variant="h6" component="div">
          Datos del paciente
        </Typography>

        <Divider></Divider><br></br>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField id="outlined-basic" label="Especie" variant="standard" fullWidth/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField id="outlined-basic" label="Edad aproximada" variant="standard" fullWidth/>
          </Grid>
          <Grid item xs={12} sm={4}>
          <FormControl fullWidth variant="standard">
            <InputLabel id="demo-simple-select-label">Sexo</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sexo}
              label="Age"
              onChange={handleChangeSexo}
            >
              <MenuItem value={1}>H</MenuItem>
              <MenuItem value={2}>M</MenuItem>

            </Select>
          </FormControl>
        </Grid>

          <Grid item xs={12} sm={4}>
            <TextField id="outlined-basic" label="Color" variant="standard" fullWidth/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField id="outlined-basic" label="Raza" variant="standard" fullWidth/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField id="outlined-basic" label="Nombre" variant="standard" fullWidth/>
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
          {
            age !== 1 ? <Grid item xs={12} sm={4}>
              <TextField disabled id="outlined-basic" label="Fecha de aplicacion" variant="standard" fullWidth/>
            </Grid> : <Grid item xs={12} sm={4}>
              <TextField did="outlined-basic" label="Fecha de aplicacion" variant="standard" fullWidth/>
            </Grid>
          }

          <Grid item xs={12} sm={4}>
            <TextField id="outlined-basic" label="No de microchip" variant="standard" fullWidth/>
          </Grid>
        </Grid>
        <br></br>
        <Typography sx={{ml: 3, flex: 1, textAlign: 'center'}} variant="h6" component="div">
          Motivo de consulta
        </Typography>
      <br></br>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={4}>
            <TextField
              id="standard-multiline-static"
              label="Observacion"
              multiline
              rows={4}
              style={{ width: '308%' }} // Ajusta el ancho al 100%
            />
          </Grid>
        </Grid>
        <br></br>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <TextField id="outlined-basic" label="Plazo de ser devuelto 'Dias'" variant="standard" fullWidth/>
        </Grid>
        </Grid>
        <br></br>
      {/*    <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField id="outlined-basic" label="Firma del responsable o solicitante" variant="standard" fullWidth/>
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField id="outlined-basic" label="Cc" variant="standard" fullWidth/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField id="outlined-basic" label="De" variant="standard" fullWidth/>
          </Grid>
          </Grid>*/}<br></br>
        <Typography sx={{ml: 3, flex: 1, textAlign: 'center'}} variant="h6" component="div">
         Funcionario participante
        </Typography>
        <br></br>
        <Divider></Divider><br></br>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField id="outlined-basic" label="Nombre" variant="standard" fullWidth/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField id="outlined-basic" label="Cargo" variant="standard" fullWidth/>
          </Grid>
        </Grid><br></br>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>


          <Stack direction="row" spacing={7}>
            <FormGroup>
              <FormLabel component="legend"><strong>ANEXOS:</strong></FormLabel>
              <FormControlLabel control={<Checkbox />} label="Copia CC" />
              <FormControlLabel  control={<Checkbox />} label="Sisben" />
              <FormControlLabel  control={<Checkbox />} label="Copia servicio publico" />
              <FormControlLabel control={<Checkbox />} label="Remision Oficial" />
              <Button sx={{mt:3}} variant="contained" endIcon={<SendIcon />}>
                Enviar
              </Button>
            </FormGroup>

          </Stack>


        </Grid>

        </Grid>
      </Container>
    </Paper>

  )
}

export default Perros;