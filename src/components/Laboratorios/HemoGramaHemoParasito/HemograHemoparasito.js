import Container from "@mui/material/Container";
import {Dialog, DialogContent, Paper, Stack} from "@mui/material";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow,} from '@mui/material';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Typography from "@mui/material/Typography";
import {useUser} from "../../../context/userContext";
import React, { useState, useEffect } from 'react';
import VerHemogramas from "./VerHemogramas";
import Cabecera from "../../../commonComponents/Cabecera";


const HemograHemoparasito = () => {
  const { user} = useUser();
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('lg');
  const [currentDate, setCurrentDate] = useState(new Date());

  const especie = ''
///Fecha
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Actualizar cada segundo

    return () => clearInterval(interval);
  }, []);

  const formattedDate = currentDate.toLocaleDateString();

  ///Modal

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const guardarHemograma = () => {
    alert('Que envio a la api')
    handleClose()
  }

  return (
    <Paper sx={{overflow: 'hidden', margin: 2, mt: 10, height: '280%'}}>
      <Container maxWidth="lg" sx={{margin: 1, mt: 4}} className='content'>
        <Cabecera
          titulo={'HEMOGRAMA - HEMOPARASITO'}
          usuario={user.user}
          fecha={formattedDate}
          cargo={'BACTERIOLOGA'}
        />
        <Button variant="contained" onClick={handleClickOpen}>
          Ingresar Registro
        </Button>
        <VerHemogramas/>
        <Dialog
          open={open}
          onClose={handleClose}
          fullWidth={fullWidth}
          maxWidth={maxWidth}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>

            <TableContainer sx={{ height: '280%'}}>
              <Table>
                <TableHead sx={{backgroundColor: '#eceff1'}}>
                  <TableRow>
                    <TableCell> <TextField
                      label="Código del paciente:"
                      id="outlined-size-small"
                      size="small"
                      type="number"
                      variant="outlined"
                      InputProps={{
                        sx:{ borderRadius:5, backgroundColor: '#D0D3D4' },
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton>
                              <SearchIcon />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    /></TableCell>
                    <TableCell>PACIENTE</TableCell>
                    <TableCell>ESPECIE</TableCell>
                    <TableCell>RAZA</TableCell>
                    <TableCell>SEXO</TableCell>
                    <TableCell>EDAD:</TableCell>
                    <TableCell>PROPIETARIO</TableCell>
                    <TableCell>REMITE (MVZ)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>Luna</TableCell>
                    <TableCell>Felino</TableCell>
                    <TableCell>Callejero</TableCell>
                    <TableCell>M</TableCell>
                    <TableCell>25</TableCell>
                    <TableCell>Juan perez lopez</TableCell>
                    <TableCell>lorem</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <Table sx={{mt:4}}>
                <TableHead sx={{backgroundColor: '#eceff1'}}>
                  <TableRow>
                    <TableCell>PARAMETRO</TableCell>
                    <TableCell>RESULTADO</TableCell>
                    <TableCell>R.NORMALIDAD</TableCell>
                    <TableCell colSpan={3}>Rec. Diferencial de leucocitos(%)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell colSpan={3}><strong>SERIE ROJA</strong></TableCell>
                    <TableCell>Neutrófilos </TableCell>
                    <TableCell><TextField id="outlined-basic" sx={{width: '100px'}} variant="outlined" size="small"  onChange={''} inputProps={{type: 'number', min: 0}}/></TableCell>
                    <TableCell>35-75</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Hematocrito (%)</TableCell>
                    <TableCell><TextField id="outlined-basic" sx={{width: '100px'}} variant="outlined" size="small"  onChange={''} inputProps={{type: 'number', min: 0}}/></TableCell>
                    <TableCell>{ especie === 'felinos' ? '24 - 44' : especie === 'canino' ? '37-55' : null}</TableCell>
                    <TableCell>Linfocitos</TableCell>
                    <TableCell><TextField id="outlined-basic" sx={{width: '100px'}} variant="outlined" size="small"  onChange={''} inputProps={{type: 'number', min: 0}}/></TableCell>
                    <TableCell>12-30</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Hemoglobina (g/dl)</TableCell>
                    <TableCell><TextField id="outlined-basic" sx={{width: '100px'}} variant="outlined" size="small"  onChange={''} inputProps={{type: 'number', min: 0}}/></TableCell>
                    <TableCell>{ especie === 'felinos' ? '8 - 15'  : especie === 'canino' ? '12 - 18': null}</TableCell>
                    <TableCell>Eosinófilos </TableCell>
                    <TableCell><TextField id="outlined-basic" sx={{width: '100px'}} variant="outlined" size="small"  onChange={''} inputProps={{type: 'number', min: 0}}/></TableCell>
                    <TableCell>2-10</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Rec. Gl.Rojos (mil/m3)</TableCell>
                    <TableCell><TextField id="outlined-basic" sx={{width: '100px'}} variant="outlined" size="small"  onChange={''} inputProps={{type: 'number', min: 0}}/></TableCell>
                    <TableCell>{especie  === 'felinos' ? '5 - 10': especie === 'canino' ? '5.6 - 8.5' : null}</TableCell>
                    <TableCell>Monocitos</TableCell>
                    <TableCell> - </TableCell>
                    <TableCell>3-10</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>VCM</TableCell>
                    <TableCell><TextField id="outlined-basic" sx={{width: '100px'}} variant="outlined" size="small"  onChange={''} inputProps={{type: 'number', min: 0}}/></TableCell>
                    <TableCell>60-77</TableCell>
                    <TableCell>Basófilos</TableCell>
                    <TableCell> - </TableCell>
                    <TableCell>Raro</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>CHCM</TableCell>
                    <TableCell><TextField id="outlined-basic" sx={{width: '100px'}} variant="outlined" size="small"  onChange={''} inputProps={{type: 'number', min: 0}}/></TableCell>
                    <TableCell>32-36</TableCell>
                    <TableCell>Blastos</TableCell>
                    <TableCell> - </TableCell>
                    <TableCell>0</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Rec. leucocitos (miles/m3)</TableCell>
                    <TableCell><TextField id="outlined-basic" sx={{width: '100px'}} variant="outlined" size="small"  onChange={''} inputProps={{type: 'number', min: 0}}/></TableCell>
                    <TableCell>{especie  === 'felinos' ? '5.5 - 19.5': especie === 'canino' ? '8 - 17' : null}</TableCell>
                    <TableCell>Bandas</TableCell>
                    <TableCell> - </TableCell>
                    <TableCell>0-1</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Rec. de Plaquetas (cien mil/mm3)</TableCell>
                    <TableCell><TextField id="outlined-basic" sx={{width: '100px'}} variant="outlined" size="small"  onChange={''} inputProps={{type: 'number', min: 0}}/></TableCell>
                    <TableCell>{especie  === 'felinos' ? '3 - 5': especie === 'canino' ? '1.5 - 5.5' : null}</TableCell>
                    <TableCell colSpan={3}>Normal en Morfologia</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Proteínas Plasmáticas Totales (g/di)</TableCell>
                    <TableCell><TextField id="outlined-basic" sx={{width: '100px'}} variant="outlined" size="small"  onChange={''} inputProps={{type: 'number', min: 0}}/></TableCell>
                    <TableCell>5.5 - 7.8</TableCell>
                    <TableCell colSpan={3}>Normal en Distribución </TableCell>
                  </TableRow>
                  {/* ... Repeat for each row */}
                </TableBody>
              </Table>
              <Grid container spacing={1} sx={{mt: 3}}>
                <TextField
                  id="standard-multiline-static"
                  label="Observacion"
                  multiline
                  rows={1}
                  sx={{mt: 2, marginLeft: 1, width: '150vh'}} // Ajusta el ancho al 100%
                />
                <TextField
                  id="standard-multiline-static"
                  label="Definiciones"
                  multiline
                  rows={1}
                  sx={{mt: 2, marginLeft: 1, width: '150vh'}} // Ajusta el ancho al 100%
                />
                <TextField
                  id="standard-multiline-static"
                  label="Hemoparasitos"
                  multiline
                  rows={1}
                  sx={{mt: 2, marginLeft: 1, width: '150vh'}} // Ajusta el ancho al 100%
                />
                <Typography variant="caption" display="block" gutterBottom sx={{marginLeft:1}}>
                  <em><strong>La descripción “no se observan”, no descarta la presencia del hemoparásito en circulación. - Se recomienda: pruebas complementarias.
                  </strong></em>
                </Typography>
              </Grid>
              <Stack direction="row" spacing={2} sx={{mt: 2, marginLeft: 0}} >
                <Button  variant="contained" onClick={guardarHemograma} endIcon={<SendIcon/>}>
                  Guardar
                </Button>
               </Stack>
              <div>
                <p sx={{color:'#ffffff'}}></p>
              </div>
            </TableContainer>
          </DialogContent>
        </Dialog>
      </Container>
    </Paper>
  )
}

export default HemograHemoparasito;