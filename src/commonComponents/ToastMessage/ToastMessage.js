import React, { Fragment,forwardRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Snackbar } from '@mui/material';
import { getMessage } from '../../redux/selectors/toastMessage';
import { hideMessage } from '../../redux/actions/message';
import MuiAlert from '@mui/material/Alert';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ToastMessage = () => {
  const dispatch = useDispatch();
  let message = useSelector(getMessage);
  
  const handleClose = () => {
    dispatch(hideMessage());
  };
  
  const renderMessages = () => {
    const messageBody = message.message;
    if (!messageBody) {
      return ''
    }
    
    if (typeof messageBody === 'string') {
      return messageBody;
    }
    
    if (messageBody.length) {
      return (
        <div>
          {messageBody.map((detail) => (
            <Fragment key={detail.message}>
              <span> &bull; {detail.message}</span> <br/>
            </Fragment>
          ))}
        </div>
      )
    }
  };

  
  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={message.isOpen}
        autoHideDuration={message.autoHideDuration}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={message.type} sx={{ width: '100%' }}>
          {renderMessages()}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ToastMessage;
