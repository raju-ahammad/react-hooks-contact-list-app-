import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getRegister } from "../../Context/Actions/Auth/Register";
import { GlobalContext } from "../../Context/Provider";

export default () => {
    const [form, setForm] = useState({});
    const [fieldErrors, setFieldErrors] = useState({})
    const history = useHistory();
    const { authDispatch, authState:{auth:{loading, data, error}} } = useContext(GlobalContext)

    useEffect(()=> {
        if (error) {
            for (const item in error) {
                setFieldErrors({...fieldErrors, [item]: error[item][0]})
            }
        }
    }, [error])

    useEffect(() => {
        if (data) {
            history.push("/auth/login")
        }
        
    }, [data])
    
    console.log("loading",loading);
    console.log("Data", data);
    console.log("error", error);
    // console.log("fieldErrors", fieldErrors);


    const onChange = (e, {name, value}) => {
        setForm({...form, [name]: value});
    }

    const registerdFormValid = 
        !form.username?.length ||
        !form.firstName?.length ||
        !form.lastName?.length ||
        !form.email?.length||
        !form.password?.length


    const onSubmit = () => {
        setFieldErrors({})
        getRegister(form)(authDispatch)
        console.log("hello this is submit");
    }

    return {form, onChange, registerdFormValid, onSubmit, loading, fieldErrors};
};

