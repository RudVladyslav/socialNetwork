import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST',
    SET_USER_PROFILE = 'SET_USER_PROFILE ',
    SET_STATUS = 'SET_STATUS',
    DELETE_POST = 'DELETE_POST'

let initialState = {
    PostsData: [
        {id: "1", message: "I am superman", like: ""},
        {id: "2", message: "No, you is batman", like: "7"},
        {id: "3", message: "i like povik", like: "7"},
        {id: "4", message: "povik vovik", like: "7"},
    ],
    profile: null,
    status: "",
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST: {
            let newPost = {id: "5", message: action.newPostBody, like: "0"};
            return {
                ...state,
                PostsData: [...state.PostsData, newPost],
                PostText: ''
            };
        }
        case SET_USER_PROFILE :
            return {
                ...state, profile: action.profile
            }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                PostsData: state.PostsData.filter(p => p.id !== action.postId)
            }
        }
        default:
            return state;
    }
}

// Action creator

export const addPostActionCreator = (newPostBody) => ({type: ADD_POST, newPostBody})

export const deletePostActionCreator = (postId) => ({type: DELETE_POST, postId})

const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

const setStatus = (status) => ({type: SET_STATUS, status})

// Thunk creator

// export const getUserProfile = (userId) => {
//     return (dispatch) => {
//         profileAPI.getProfileUser(userId).then(data => {
//             dispatch(setUserProfile(data))
//         })
//     }
// }

export const getUserProfile = (userId) => async (dispatch) => {
    let data = await profileAPI.getProfileUser(userId)
    dispatch(setUserProfile(data))
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getUserStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    dispatch(setStatus(status))
}


export default profileReducer;
