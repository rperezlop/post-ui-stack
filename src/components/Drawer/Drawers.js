import React, { useState } from 'react';
import { Box, CssBaseline, AppBar, Toolbar, Typography, IconButton, Chip, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import { NavLink } from 'react-router-dom';
import {listIcon} from './listIcon'; // Asumiendo que listIcon contiene los íconos correspondientes.
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import {useUser} from "../../context/userContext";
import {useTheme} from '@mui/material/styles';
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
    text: 'RECEPCIÓN',
    icon: 'users',
    path: '/perros',
    children: [
      {
        id: 3,
        title: 'Registrar',
        icon: 'personAdd',
        path: '/perros',
        titleToolbar: 'Gestión de usuarios'
      },
      {
        id: 4,
        title: 'Salida',
        icon: 'lock',
        path: '/users',
        titleToolbar: 'Usuarios bloqueados'
      },
    ]
  },
  {
    text: 'VETERINARIOS',
    icon: 'home',
    path: '/home',
    children: [
      {
        id: 3,
        title: 'Vacunación ',
        icon: 'personAdd',
        path: '/vacunas',
        titleToolbar: 'Gestión de usuarios'
      },
      {
        id: 4,
        title: 'Historias',
        icon: 'lock',
        path: '/users',
        titleToolbar: 'Usuarios bloqueados'
      },
      ]
  },
  {
    text: 'LABORATORIOS',
    icon: 'home',
    path: '/hemograma',
    children: [
      {
        id: 3,
        title: 'Hemograma ',
        icon: 'personAdd',
        path: '/hemograma',
        titleToolbar: 'Gestión de usuarios'
      },
      {
        id: 4,
        title: 'Quimica sanguinea',
        icon: 'lock',
        path: '/users',
        titleToolbar: 'Usuarios bloqueados'
      },
      {
        id: 4,
        title: 'Parcial de orina',
        icon: 'lock',
        path: '/users',
        titleToolbar: 'Usuarios bloqueados'
      },
      {
        id: 4,
        title: 'Cropoanalisis',
        icon: 'lock',
        path: '/users',
        titleToolbar: 'Usuarios bloqueados'
      },
      {
        id: 4,
        title: 'Trigograma',
        icon: 'lock',
        path: '/users',
        titleToolbar: 'Usuarios bloqueados'
      },
      {
        id: 4,
        title: 'Citologia auricular',
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
  const {logout} = useUser();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const [expandedSections, setExpandedSections] = useState({}); // Nuevo estado

  const handleToggle = (index) => {
    setExpandedSections((prevExpandedSections) => ({
      ...prevExpandedSections,
      [index]: !prevExpandedSections[index],
    }));
  };


 /* const handleToggle = () => {
    setOpen(!open);
  };
*/
  const handleLogout = () => {
    logout();
  }

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
                  <ListItem disablePadding onClick={() => handleToggle(index)}>
                    <ListItemButton>
                      <ListItemIcon>
                        {listIcon[item.icon]}
                      </ListItemIcon>
                      <ListItemText primary={item.text} />
                      {expandedSections[index] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
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
                  <Collapse in={expandedSections[index]} timeout="auto" unmountOnExit>
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
