
import {COMMENTS, GET_POST_SUCCESS, OPEN_COMMENT, OPEN_USER_INFO, USER_INFO} from '../../constant/actionTypes/post';
import {fetchData, postData} from "../../services/services";
import { showMessage } from "./message";
import { handleError } from './error';


export const fetchPost = () => async dispatch => {
  try {
    const postsData = await fetchData('post', {params: {limit: 10}});
    dispatch(fetchPostSuccess(postsData.data));
  } catch (err) {
    dispatch(handleError(err));
  }
}

export const EmployeeForm = (payload) => async dispatch => {
  try {
    await postData('/empleados', payload);
    dispatch(showMessage.success().message('dato creado con exito').duration(3000).build());
    // Por ejemplo, después de enviar los datos, podrías refrescar la lista de empleados
    dispatch(fetchPost());
  } catch (err) {
    // Manejar el error si la solicitud no tiene éxito
    dispatch(handleError(err));
  }
};

const fetchPostSuccess = post => ({
  type: GET_POST_SUCCESS,
  post,
});

export const comments = comment => (dispatch) => {
  dispatch({
    type: COMMENTS,
    comment,
  })
};

export const openComments = openComment => (dispatch) => {
  dispatch({
    type: OPEN_COMMENT,
    openComment,
  })
};

export const userInfo = userInfo => (dispatch) => {
  dispatch({
    type: USER_INFO,
    userInfo,
  })
};

export const openUserInfo = openUserInfo => (dispatch) => {
  dispatch({
    type: OPEN_USER_INFO,
    openUserInfo,
  })
};