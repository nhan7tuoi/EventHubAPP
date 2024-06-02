import axiosClient from "./axiosClient"
import BASE_URL from "./baseUri";

class AuthApi {
    handleAuth = async (
        url:string,
        data?:any,
        method?: 'get' | 'post',
    ) => {
    return await axiosClient(`${BASE_URL}/auth${url}`,{
        method: method ?? 'get',
        data,
    });
    }
}

const authApi = new AuthApi();
export default authApi;