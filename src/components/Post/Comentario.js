import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getComment, getOpenComment} from "../../redux/selectors/post";
import {openComments} from "../../redux/actions/post";



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

  const Comentario = () => {
    const dispatch = useDispatch();
    const comment = useSelector(getComment, shallowEqual);
    const open = useSelector(getOpenComment, shallowEqual);
    const handleClose = () =>  dispatch(openComments(false));

  return (
    <div>
             
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>     
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            {comment}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
export default Comentario;