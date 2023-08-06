
import { DISPLAY_MESSAGE, HIDE_MESSAGE } from '../../constant/actionTypes/toastMessage';
import { TOAST_MESSAGE_INITIAL_STATE } from '../../commonComponents/ToastMessage/constants';

const message = (state = TOAST_MESSAGE_INITIAL_STATE, action) => {
  switch (action.type) {
    case DISPLAY_MESSAGE:
      return {
        ...state,
        isOpen: true,
        ...action.message
      };
  
    case HIDE_MESSAGE:
      return {
        ...state,
        isOpen: false,
        ...action.message
      };
    
    default: return state;
  }

};

export default message;
