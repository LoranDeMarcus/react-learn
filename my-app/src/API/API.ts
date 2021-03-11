import axios from 'axios';
import { UserType } from "../Types/types";

export const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '53f444d4-767d-44da-b452-21ca4aee6d91'
    }
});

export type GetItemsType = {
    items: Array<UserType>,
    totalCount: number,
    error: string | null
}

export enum ResultCodesEnum {
    success = 0,
    error = 1
}

export enum CaptchaEnum {
    captcha = 10
}

export type SavePhotoType = {
    photos: {
        small: string,
        large: string
    }
}

export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D,
    messages: Array<string>,
    resultCode: RC
}