import { axiosInstance, GetItemsType, APIResponseType } from "./API";

export const usersAPI = {
    getUsersRequest(currentPage = 1, pageSize = 8) {
        return axiosInstance.get<GetItemsType>(`users?page=${ currentPage }&count=${ pageSize }`).then(response => response.data);
    },
    toggleFollow(userId: number) {
        return axiosInstance.get(`follow/${ userId }`).then(response => {
            if (response.data === false) {
                return axiosInstance.post<APIResponseType>(`follow/${ userId }`).then(response => response.data);
            } else {
                return axiosInstance.delete(`follow/${ userId }`).then(response => response.data) as Promise<APIResponseType>;
            }
        });
    }
}