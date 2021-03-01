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
    getUsersProfile(userId) {
        console.warn('Obsolete method. Please use profileAPI object');
        return profileAPI.getUsersProfile(userId);
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

export const profileAPI = {
    getUsersProfile(userId) {
        return axiosInstance.get(`profile/${userId}`).then(response => response.data);
    },
    getUserStatus(userId) {
        return axiosInstance.get(`profile/status/${userId}`).then(response => response.data);
    },
    updateUserStatus(status) {
        return axiosInstance.put(`profile/status`, { status });
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append('image', photoFile)
        return axiosInstance.put('profile/photo', formData, {
            'Content-Type': 'multipart/form-data'
        });
    },
    saveProfile(profile) {
        return axiosInstance.put('profile', profile);
    }
}

export const authAPI = {
    authMeRequest() {
        return axiosInstance.get('auth/me').then(response => response.data);
    },
    loginRequest(email, password, rememberMe = false) {
        return axiosInstance.post('auth/login', {email, password, rememberMe}).then(response => response.data);
    },
    logoutRequest() {
        return axiosInstance.delete('auth/login').then(response => response.data);
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return axiosInstance.get('security/get-captcha-url');
    }
}
