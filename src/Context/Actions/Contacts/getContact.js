import axiosInstance from "../../../Helper/axiosInstance"

export default (history) => {
    axiosInstance(history)
        .get("/contacts/")
        .then((res)=>console.log("data:", res.data))
        .catch((err)=>console.log("err", err))
}