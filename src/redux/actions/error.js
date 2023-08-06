import { showMessage } from './message';
import { errorMessages, errorMessageByStatusCode } from '../../constant/errorMessage';


const getJoiValidationErrors = ({ error, message }) => {
  if (!message && (!error || !error.details)) {
    return;
  }

  if (!message || (!error || !error.details)) {
    return;
  }

  return error.details || message;
};

export const handleError = (error) => (dispatch) => {
  if (!error.isAxiosError) {
    return;
  }
  
  const { status, data } = error.response;
  const isPolicyError = status === 403 && data.statusText === 'Unauthorized Saso Api Route';
  if (isPolicyError) {
    return;
  }

  errorMessageByStatusCode['422'] = getJoiValidationErrors(data);
  errorMessageByStatusCode['403'] = data.statusText || data.message || errorMessages.INTERNAL_ERROR;
  errorMessageByStatusCode['400'] = data.statusText || data.message || errorMessages.INTERNAL_ERROR;
  let errorMessage = errorMessageByStatusCode[status];
  
  if (!errorMessage) {
    errorMessage = errorMessages.INTERNAL_ERROR;
  }

  dispatch(showMessage.error().message(errorMessage).duration(5000).build());
};
