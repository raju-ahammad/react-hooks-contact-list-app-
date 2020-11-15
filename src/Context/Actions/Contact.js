import axiosInstance from '../../Helper/Axios'

export const getContact = () => {
    axiosInstance
        .get('/contacts')
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))
}