import * as React from 'react';
import Container from "@mui/material/Container";
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper} from "@mui/material";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import AddIcon from "@mui/icons-material/Add";
import ListItemText from "@mui/material/ListItemText";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Toolbar from '@mui/material/Toolbar';
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";


const Vacunas = () => {


  function createData(name, calories, fat, carbs, protein) {
    return {name, calories, fat, carbs, protein};
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const prueba = () => {
    alert('prueba ')
    handleClose()
  }


  return (

    <Paper sx={{overflow: 'hidden', margin: 2, mt: 10, height: '100vh'}}>
      <Container maxWidth="lg" sx={{margin: 1, mt: 4}}>
        <div>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <AddIcon/>
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Formato de vacunación" secondary="Gatos/Especies"/>
            </ListItem>
          </List>
          <Divider></Divider>
          <br></br>
          <br></br>

          <Button variant="contained" onClick={handleClickOpen}>
            Ingresar Registro
          </Button>
          <br></br>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >

            <Toolbar sx={{backgroundColor: '#eceff1'}}> <Typography sx={{ml: 3, flex: 1, textAlign: 'left'}} variant="h6" component="div">
              <DialogTitle id="alert-dialog-title">
                {"Ingrese los datos"}
              </DialogTitle>
            </Typography></Toolbar>

            <DialogContent>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <TextField id="outlined-basic" label="Codigo de paciente" variant="standard" fullWidth/>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField id="outlined-basic" label="Especie" variant="standard" fullWidth/>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField id="outlined-basic" label="Vacuna" defaultValue="rabia" variant="standard" fullWidth/>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField id="outlined-basic" label="Lote vacuna" variant="standard" fullWidth/>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    id="standard-multiline-static"
                    label="Observacion"
                    multiline
                    rows={4}
                    variant="standard"
                    style={{width: '220%'}} // Ajusta el ancho al 100%
                  />
                </Grid>

              </Grid><br></br>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancelar</Button>
              <Button onClick={prueba} autoFocus>
                Guardar
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        <br></br>
        <TableContainer component={Paper}>
          <Toolbar sx={{backgroundColor: '#eceff1'}}> <Typography sx={{ml: 3, flex: 1, textAlign: 'left'}} variant="h6"
                                                                  component="div">
            Vacunación
          </Typography></Toolbar>
          <Table sx={{minWidth: 650}} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell align="right">Id paciente</TableCell>
                <TableCell align="right">Especie</TableCell>
                <TableCell align="right">Vacuna</TableCell>
                <TableCell align="right">Desparacitación</TableCell>
                <TableCell align="right">observación</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{
                    '&:last-child td, &:last-child th': {border: 0},
                    '&:hover': {backgroundColor: 'rgba(0, 0, 0, 0.1)'}, // Cambia el color según tus preferencias
                    transition: 'background-color 0.3s ease-in-out', // Agrega una transición suave
                  }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </Container>
    </Paper>


  )
}

export default Vacunas;