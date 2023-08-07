import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  title: {
    margin: theme.spacing(1),
    marginTop: theme.spacing(2),
  },
  listContainer: {
    width: '100%',
  },
  link: {
    textDecoration: 'none'
  },
  text: {
    flex: 'none',
    display: 'inline-block',
    color: theme.palette.black[700]
  },
  icon: {
    fill: theme.palette.black[700],
    //color: theme.palette.green
  },
  item: {
    '&:hover': {
      backgroundColor: 'unset'
    }
  },
  activeItem: {
    '& .MuiListItem-button': {
      backgroundColor: theme.palette.primary.veryLight
    },
    '& .MuiListItemText-root': {
      color: theme.font.dark,
    },
    '& .MuiListItemIcon-root > svg': {
      fill: theme.font.dark,
    }
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },

  headerToolbar: {
    minHeight: 130,
    padding: theme.spacing(0),
  },
  headerAvatar: {
    paddingLeft: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
  headerUserIcon: {
    height: theme.spacing(4),
    width: theme.spacing(4),
    backgroundColor: theme.palette.common.white,
    color: theme.font.dark,
  },
  headerText: {
    paddingTop: theme.spacing(1)
  },
  headerName: {
    fontSize:14
  },
  headerEmail: {
    fontSize:12
  },
  titleItem: {
   paddingTop: theme.spacing(1),
   paddingLeft: theme.spacing(1.5),
   color: theme.palette.grey[900]
  },
}));

export default useStyles;
