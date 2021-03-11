import { axiosInstance, APIResponseType } from "./API";
import { PhotosType, ProfileType } from "../Types/types";

type IsFollowedRequestType = {
    bool: boolean
}

export const profileAPI = {
    getUsersProfile(userId: number | null) {
        return axiosInstance.get<ProfileType>(`profile/${ userId }`).then(response => response.data);
    },
    getUserStatus(userId: number) {
        return axiosInstance.get<string>(`profile/status/${ userId }`).then(response => response.data);
    },
    updateUserStatus(status: string) {
        return axiosInstance.put<APIResponseType>(`profile/status`, { status }).then(response => response.data);
    },
    savePhoto(photoFile: any) {
        const formData = new FormData();
        formData.append('image', photoFile)
        return axiosInstance.put<APIResponseType<PhotosType>>('profile/photo', formData, {
            // @ts-ignore
            'Content-Type': 'multipart/form-data'
            // @ts-ignore
        }).then(response => response.data);
    },
    saveProfile(profile: ProfileType) {
        return axiosInstance.put<APIResponseType<PhotosType>>('profile', profile).then(response => response.data);
    }
}