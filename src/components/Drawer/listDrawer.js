export const listDrawer = [
  {
    text: 'Inicio',
    icon: 'home',
    path: '/home'
  },
  {
    text: 'Perros',
    icon: 'users',
    path: '/perros',
    children: [
      {
        id: 3,
        title: 'Gestión',
        icon: 'personAdd',
        path: '/users',
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
  }
];