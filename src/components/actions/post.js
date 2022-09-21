import axios from "axios";
import {COMMENTS, GET_POST_SUCCESS, OPEN_COMMENT, OPEN_USER_INFO, USER_INFO} from '../../constant/actionTypes/post';

export const fetchPost = () => async dispatch => {

  try {
   const {data} = await axios.get('https://dummyapi.io/data/v1/post?limit=10',{
    headers: {
      'app-id':'63265ae5c7c922129141541d'
    },
  })

    dispatch(fetchPostSuccess(data.data))
  } catch (err) {
    console.log(err);
  }
}

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