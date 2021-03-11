import { axiosInstance, CaptchaEnum, APIResponseType, ResultCodesEnum } from "./API";

type AuthMeDataType = {
    id: number,
    email: string,
    login: string
}
type LoginDataType = {
    userId: number
}
export const authAPI = {
    authMeRequest() {
        return axiosInstance.get<APIResponseType<AuthMeDataType>>('auth/me').then(response => response.data);
    },
    loginRequest(email: string, password: string, rememberMe = false, captcha: string | null = null) {
        return axiosInstance.post<APIResponseType<LoginDataType, ResultCodesEnum | CaptchaEnum>>('auth/login', { email, password, rememberMe, captcha }).then(response => response.data);
    },
    logoutRequest() {
        return axiosInstance.delete('auth/login').then(response => response.data);
    }
}