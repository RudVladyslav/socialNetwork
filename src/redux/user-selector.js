export const getUsers = state => {
    return state.UsersPage.users
}

export const getTotalCount = state => {
    return state.UsersPage.totalCount
}

export const getPageSize = state => {
    return state.UsersPage.pageSize
}

export const getCurrentPage = state => {
    return state.UsersPage.currentPage
}

export const getIsFetching = state => {
    return state.UsersPage.isFetching
}
export const getFollowingInProgress = state => {
    return state.UsersPage.FollowingInProgress
}