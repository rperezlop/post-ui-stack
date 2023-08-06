import {COMMENTS, GET_POST_SUCCESS, OPEN_COMMENT, OPEN_USER_INFO, USER_INFO} from '../../constant/actionTypes/post';
import { POST_INITIAL_STATE } from '../../components/Post/initialState';


const post = (state = POST_INITIAL_STATE, action ) => {
    switch (action.type) {
        case GET_POST_SUCCESS:    
            return {
                ...state,
                list: action.post                  
        };

        case COMMENTS:
            return {
                ...state,
                comment: action.comment
            };

        case OPEN_COMMENT:
            return {
                ...state,
                openComment: action.openComment
            };

        case USER_INFO:
            return {
                ...state,
                userInfo: action.userInfo
            };

        case OPEN_USER_INFO:
            return {
                ...state,
                openUserInfo: action.openUserInfo
            };



        default: return state;
    }
}
export default post;