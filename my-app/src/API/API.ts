import axios from 'axios';
import { ProfileType, UserType } from "../Types/types";

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '53f444d4-767d-44da-b452-21ca4aee6d91'
    }
});

type GetUsersRequestType = {
    items: Array<UserType>,
    totalCount: number,
    error: string
}

type IsFollowedRequestType = {
    bool: boolean
}

type ToggleFollowType = {
    resultCode: ResultCodesEnum,
    messages: Array<string>,
    data: object
}

export const usersAPI = {
    getUsersRequest(currentPage = 1, pageSize = 8) {
        return axiosInstance.get<GetUsersRequestType>(`users?page=${ currentPage }&count=${ pageSize }`).then(response => response.data);
    },
    getUsersProfile(userId: number) {
        console.warn('Obsolete method. Please use profileAPI object');
        return profileAPI.getUsersProfile(userId);
    },
    toggleFollow(userId: number) {
        return axiosInstance.get(`follow/${ userId }`).then(response => {
            if (response.data === false) {
                return axiosInstance.post<ToggleFollowType>(`follow/${ userId }`).then(response => response.data);
            } else {
                return axiosInstance.delete<ToggleFollowType>(`follow/${ userId }`).then(response => response.data);
            }
        });
    }
}

type SaveProfileType = {
    resultCode: ResultCodesEnum,
    messages: Array<string>
    data: object
}

type SavePhotoType = {
    resultCode: ResultCodesEnum,
    fieldsError: Array<string>,
    messages: Array<string>,
    data: {
        photos: {
            small: string,
            large: string
        }
    }
}

export const profileAPI = {
    getUsersProfile(userId: number | null) {
        return axiosInstance.get<ProfileType>(`profile/${ userId }`).then(response => response.data);
    },
    getUserStatus(userId: number) {
        return axiosInstance.get<string>(`profile/status/${ userId }`).then(response => response.data);
    },
    updateUserStatus(status: string) {
        return axiosInstance.put<SaveProfileType>(`profile/status`, { status }).then(response => response.data);
    },
    savePhoto(photoFile: any) {
        const formData = new FormData();
        formData.append('image', photoFile)
        return axiosInstance.put<SavePhotoType>('profile/photo', formData, {
            // @ts-ignore
            'Content-Type': 'multipart/form-data'
            // @ts-ignore
        }).then(response => response.data);
    },
    saveProfile(profile: ProfileType) {
        return axiosInstance.put<SaveProfileType>('profile', profile).then(response => response.data);
    }
}

export enum ResultCodesEnum {
    success = 0,
    error = 1
}

export enum CaptchaEnum {
    captcha = 10
}

type AuthMeType = {
    data: {
        id: number,
        email: string,
        login: string
    },
    resultCode: ResultCodesEnum,
    messages: Array<string>
}

type LoginType = {
    resultCode: ResultCodesEnum | CaptchaEnum,
    messages: string,
    data: object
}

export const authAPI = {
    authMeRequest() {
        return axiosInstance.get<AuthMeType>('auth/me').then(response => response.data);
    },
    loginRequest(email: string, password: string, rememberMe = false, captcha: string | null = null) {
        return axiosInstance.post<LoginType>('auth/login', { email, password, rememberMe, captcha }).then(response => response.data);
    },
    logoutRequest() {
        return axiosInstance.delete<LoginType>('auth/login').then(response => response.data);
    }
}

type GetCaptchaUrlType = {
    resultCode: ResultCodesEnum | CaptchaEnum,
    messages: string,
    data: object,
    url: string
}

export const securityAPI = {
    getCaptchaUrl() {
        return axiosInstance.get<GetCaptchaUrlType>('security/get-captcha-url');
    }
}
