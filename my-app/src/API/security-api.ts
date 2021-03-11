import { axiosInstance } from "./API";

type GetCaptchaUrlType = {
    url: string
}
export const securityAPI = {
    getCaptchaUrl() {
        return axiosInstance.get<GetCaptchaUrlType>('security/get-captcha-url');
    }
}