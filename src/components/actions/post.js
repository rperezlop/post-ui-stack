
import axios from "axios";
import { GET_POST_SUCCESS } from '../../constant/actionTypes/post';

export const fetchPost = () => async dispatch => {

  try {
   const {data} = await axios.get('https://dummyapi.io/data/v1/post?limit=10',{
    headers: {
      'app-id':'63265ae5c7c922129141541d'
    },
  })   

    dispatch(fetchPostSuccess(data)) 
  } catch (err) {
    console.log(err);
  }
}

const fetchPostSuccess = post => ({
  type: GET_POST_SUCCESS,
  post,
});

