
import {useState} from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

  const Comentario = ({data}) => {
  const [openComentario, setOpenComentario] = useState(false);
  const handleOpen = () => setOpenComentario(true);
  const handleClose = () => setOpenComentario(false);

  return (
    <div>
        <IconButton aria-label="add to favorites">
        <VisibilityIcon onClick={handleOpen}/>
      </IconButton>        
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openComentario}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openComentario}>
          <Box sx={style}>          

            <Chip label="Comentario"/>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            {data.text}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
export default Comentario;