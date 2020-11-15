import axiosInstance from '../../Helper/Axios'

export const getRegister = () => {
    axiosInstance
        .post('/auth/register')
        .then((res)=>console.log("res", res))
        .catch((err)=>console.log("error:", err))
}