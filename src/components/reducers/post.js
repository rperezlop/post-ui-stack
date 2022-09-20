import { GET_POST_SUCCESS } from '../../constant/actionTypes/post';
import { POST_INITIAL_STATE } from '../../components/Post/initialState';


const post = (state = POST_INITIAL_STATE, action ) => {
    console.log('Estado',POST_INITIAL_STATE)
    console.log('Acciones',action)
    switch (action.type) {
        case GET_POST_SUCCESS:    
            return {
                ...state,
                list: action.post                  
        };

        default: return state;
    }
}
export default post;
