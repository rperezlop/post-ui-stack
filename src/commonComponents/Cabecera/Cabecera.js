import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Grid from "@mui/material/Grid";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import AddIcon from "@mui/icons-material/Add";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import React from "react";

const Cabecera = ({titulo, usuario, fecha, cargo}) => {
  return (
    <div>
      <List>
        <ListItem>
          <Grid container alignItems="center">
            <Grid item>
              <ListItemAvatar>
                <Avatar>
                  <AddIcon/>
                </Avatar>
              </ListItemAvatar>
            </Grid>
            <Grid item xs>
              <ListItemText
                primary={ titulo === '' || null ? null : titulo}
                secondary={fecha === '' || null ? null : fecha}/>
            </Grid>
            <Grid item>
              <ListItemText
                primary={usuario === '' || null ? null : usuario}
                secondary={cargo === '' || null ? null : cargo}/>
            </Grid>
          </Grid>
        </ListItem>
      </List>
      <Divider></Divider>
      <br></br>
      <br></br>
    </div>
  )
}
export default Cabecera;