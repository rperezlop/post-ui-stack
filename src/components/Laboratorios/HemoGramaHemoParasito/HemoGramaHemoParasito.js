import Container from "@mui/material/Container";
import {Paper, Stack} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import AddIcon from "@mui/icons-material/Add";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import * as React from "react";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow,} from '@mui/material';
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";


const HemoGramaHemoParasito = () => {
  return (
    <Paper sx={{overflow: 'hidden', margin: 2, mt: 10, height: '280%'}}>
      <Container maxWidth="lg" sx={{margin: 1, mt: 4}}>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <AddIcon/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Formato de hemograma - hemoparasito" secondary="Gatos/Perros"/>
          </ListItem>
        </List>
        <Divider></Divider>
        <br></br>
        <br></br>
        <TableContainer sx={{ height: '280%'}}>
          <Table>
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
                <TableCell><TextField id="outlined-basic" sx={{width: '100px'}} variant="outlined" size="small"/></TableCell>
                <TableCell>35-75</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Hematocrito (%)</TableCell>
                <TableCell><TextField id="outlined-basic" sx={{width: '100px'}} variant="outlined" size="small"/></TableCell>
                <TableCell>24 - 44</TableCell>
                <TableCell>Linfocitos</TableCell>
                <TableCell><TextField id="outlined-basic" sx={{width: '100px'}} variant="outlined" size="small"/></TableCell>
                <TableCell>12-30</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Hemoglobina (g/dl)</TableCell>
                <TableCell><TextField id="outlined-basic" sx={{width: '100px'}} variant="outlined" size="small"/></TableCell>
                <TableCell>8 - 15</TableCell>
                <TableCell>Eosinófilos </TableCell>
                <TableCell><TextField id="outlined-basic" sx={{width: '100px'}} variant="outlined" size="small"/></TableCell>
                <TableCell>2-10</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Rec. Gl.Rojos (mil/m3)</TableCell>
                <TableCell><TextField id="outlined-basic" sx={{width: '100px'}} variant="outlined" size="small"/></TableCell>
                <TableCell>5 - 10</TableCell>
                <TableCell>Monocitos</TableCell>
                <TableCell> - </TableCell>
                <TableCell>3-10</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>VCM</TableCell>
                <TableCell><TextField id="outlined-basic" sx={{width: '100px'}} variant="outlined" size="small"/></TableCell>
                <TableCell>60-77</TableCell>
                <TableCell>Basófilos</TableCell>
                <TableCell> - </TableCell>
                <TableCell>Raro</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>CHCM</TableCell>
                <TableCell><TextField id="outlined-basic" sx={{width: '100px'}} variant="outlined" size="small"/></TableCell>
                <TableCell>32-36</TableCell>
                <TableCell>Blastos</TableCell>
                <TableCell> - </TableCell>
                <TableCell>0</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Rec. leucocitos (miles/m3)</TableCell>
                <TableCell><TextField id="outlined-basic" sx={{width: '100px'}} variant="outlined" size="small"/></TableCell>
                <TableCell>5.5 - 19.5</TableCell>
                <TableCell>Bandas</TableCell>
                <TableCell> - </TableCell>
                <TableCell>0-1</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Rec. de Plaquetas (cien mil/mm3)</TableCell>
                <TableCell><TextField id="outlined-basic" sx={{width: '100px'}} variant="outlined" size="small"/></TableCell>
                <TableCell>3 - 5</TableCell>
                <TableCell colSpan={3}>Normal en Morfologia</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Proteínas Plasmáticas Totales (g/di)</TableCell>
                <TableCell><TextField id="outlined-basic" sx={{width: '100px'}} variant="outlined" size="small"/></TableCell>
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
          </Grid>
          <Stack direction="row" spacing={2} sx={{mt: 2, marginLeft: 0}} >
            <Button  variant="contained" endIcon={<SendIcon/>}>
              Enviar
            </Button>
            <Button variant="contained" endIcon={<SendIcon/>}>
              Editar
            </Button>
          </Stack>
          <div>
            <p sx={{color:'#ffffff'}}></p>
          </div>

        </TableContainer>

      </Container>

    </Paper>
  )
}

export default HemoGramaHemoParasito;