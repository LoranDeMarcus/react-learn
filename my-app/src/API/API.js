import * as axios from 'axios';

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '53f444d4-767d-44da-b452-21ca4aee6d91'
    }
});

export const usersAPI = {
    getUsersRequest(currentPage = 1, pageSize = 8) {
        return axiosInstance.get(`users?page=${ currentPage }&count=${ pageSize }`).then(response => response.data);
    },
    setUsersProfile(userId) {
        return axiosInstance.get(`profile/${userId}`).then(response => response.data);
    },
    authMeRequest() {
        return axiosInstance.get('auth/me').then(response => response.data);
    },
    toggleFollow(userId) {
        return axiosInstance.get(`follow/${ userId }`).then(response => {
            if (response.data === false) {
                return axiosInstance.post(`follow/${ userId }`).then(response => response.data);
            } else {
                return axiosInstance.delete(`follow/${ userId }`).then(response => response.data);
            }
        });
    }
}