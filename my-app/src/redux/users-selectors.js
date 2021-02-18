export const getAllUsers = (state) => {
    return state.usersPage.users;
}

export const getPageSize = (state) => {
    return state.pageSize.users;
}

export const getTotalUsersCount = (state) => {
    return state.totalUsersCount.users;
}

export const getCurrentPage = (state) => {
    return state.currentPage.users;
}

export const getIsFetching = (state) => {
    return state.isFetching.users;
}

export const getFollowingInProgress = (state) => {
    return state.followingInProgress.users;
}

export const getIsAuth = (state) => {
    return state.auth.isAuth;
}