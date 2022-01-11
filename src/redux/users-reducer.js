import {usersAPI} from "../api/api";
import {updateObjInArray} from "../utils/helper/objHelper";

const FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT',
    TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING',
    TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS'

let initialState = {
    users: [],
    totalCount: 0,
    pageSize: 100,
    currentPage: 1,
    isFetching: false,
    FollowingInProgress: []
}

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: updateObjInArray(state.users, action.userID, ['id'], {followed: true})
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: updateObjInArray(state.users, action.userID, ['id'], {followed: false})
            }
        }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalCount: action.totalCount}
        }
        case TOGGLE_IS_FETCHING : {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                FollowingInProgress: action.FollowingInProgress
                    ? [...state.FollowingInProgress, action.userID]
                    : state.FollowingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state;
    }
}


// Action creator

export const confirmFollowed = (userID) => ({type: FOLLOW, userID})
export const confirmUnfollow = (userID) => ({type: UNFOLLOW, userID})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage})
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount: totalCount})
export const setToggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching})
export const setToggleFollowingInProgress = (FollowingInProgress, userId) => ({
    type: TOGGLE_FOLLOWING_IN_PROGRESS,
    FollowingInProgress, userId
})

// Thunk creator

export const getUsersRequest = (currentPage, pageSize) => async (dispatch) => {
    dispatch(setToggleIsFetching(true))
    let data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(setCurrentPage(currentPage))
    dispatch(setToggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
}

export const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {

    dispatch(setToggleFollowingInProgress(true, userId))
    let data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(setToggleFollowingInProgress(false, userId))
}

export const follow = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), confirmFollowed)
}

export const unfollow = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), confirmUnfollow)
}

export default userReducer;