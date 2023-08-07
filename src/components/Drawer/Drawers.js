import React, { useState } from 'react';
import { Box, CssBaseline, AppBar, Toolbar, Typography, IconButton, Chip, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import { NavLink } from 'react-router-dom';
import {listIcon} from './listIcon'; // Asumiendo que listIcon contiene los íconos correspondientes.
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


const drawerWidth = 240;

export const listDrawer = [
  {
    text: 'Inicio',
    icon: 'home',
    path: '/home'
  },
  {
    text: 'Lab-Perros',
    icon: 'users',
    path: '/perros',
    children: [
      {
        id: 3,
        title: 'HEMOGRAMA',
        icon: 'personAdd',
        path: '/perros',
        titleToolbar: 'Gestión de usuarios'
      },
      {
        id: 4,
        title: 'Bloqueados',
        icon: 'lock',
        path: '/users',
        titleToolbar: 'Usuarios bloqueados'
      },
      {
        id: 5,
        title: 'Asignar servicio',
        icon: 'AddServiceToUserIcon',
        path: '/users',
        titleToolbar: 'Asignar servicio a usuario'
      }
    ]
  },
  {
    text: 'LAB-GATOS',
    icon: 'home',
    path: '/home',
    children: [
      {
        id: 3,
        title: 'HEMOGRAMA',
        icon: 'personAdd',
        path: '/perros',
        titleToolbar: 'Gestión de usuarios'
      },
      {
        id: 4,
        title: 'Bloqueados',
        icon: 'lock',
        path: '/users',
        titleToolbar: 'Usuarios bloqueados'
      },
      ]
  },
  // More items...
];

function NestedList({ item }) {
  return (
    <List>
      {item.children.map((childItem) => (
        <NavLink
          key={`${childItem.title}-${childItem.id}`}
          to={childItem.path}
          style={{ textDecoration: 'none', color: '#000000' }}
        >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {listIcon[childItem.icon]}
              </ListItemIcon>
              <ListItemText primary={childItem.title} />
            </ListItemButton>
          </ListItem>
        </NavLink>
      ))}
    </List>
  );
}

export default function Drawers () {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    // Implementar lógica de cerrar sesión
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ color: 'white', borderColor: 'white' }}
            >
              EL GUARDIAN
            </Typography>
          </Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
          <IconButton>
            <MailIcon />
          </IconButton>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <Chip
            label="Cerrar sesión"
            component="a"
            href="#basic-chip"
            variant="outlined"
            clickable
            onClick={handleLogout}
            sx={{ color: 'white', borderColor: 'white' }}
          />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {listDrawer.map((item, index) => (
              <div key={`${item.text}-${index}`}>
                {item.children ? (
                  <ListItem disablePadding onClick={handleToggle}>
                    <ListItemButton>
                      <ListItemIcon>
                        {listIcon[item.icon]}
                      </ListItemIcon>
                      <ListItemText primary={item.text} />
                      {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </ListItemButton>
                  </ListItem>
                ) : (
                  <NavLink
                    to={item.path}
                    style={{ textDecoration: 'none', color: '#000000' }}
                  >
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          {listIcon[item.icon]}
                        </ListItemIcon>
                        <ListItemText primary={item.text} />
                      </ListItemButton>
                    </ListItem>
                  </NavLink>
                )}
                {item.children && (
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <NestedList item={item} />
                  </Collapse>
                )}
              </div>
            ))}
          </List>
        </Box>
      </Drawer>
      {/*<Offset/>*/}
    </Box>
  );
}
