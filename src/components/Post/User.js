/* eslint-disable react/jsx-no-undef */
import { Stack } from "@mui/material";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

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

const User = ({open, setOpen, data }) => {
  const handleClose = () => setOpen(false);
console.log(data)
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
            <Stack spacing={1} direction="row">
              <Avatar alt="Remy Sharp" src={data.picture} />
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <Chip label={`${data.firstName} ${data.lastName}`} />
              </Typography>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
export default User;