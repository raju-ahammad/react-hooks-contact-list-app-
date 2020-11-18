import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getLogin } from "../../Context/Actions/Auth/Login";
import { GlobalContext } from "../../Context/Provider";

export default () => {
    const [form, setForm] = useState({});
   
    console.log("form", form);
    const history = useHistory();
    const { authDispatch, authState:{auth:{loading, data, error}} } = useContext(GlobalContext)


    
    
    console.log("loading",loading);
    console.log("Data", data);
    console.log("error", error);

    const onChange = (e, {name, value}) => {
        setForm({...form, [name]: value});
    }

    const loginFormValid = !form.username?.length || !form.password?.length


    const onSubmit = () => {
        getLogin(form)(authDispatch)
    }

    useEffect(() => {
        if (data) {
            if (data.user) {
                history.push("/");
            }
        }
        
    }, [data])

    return {form, onChange, loginFormValid, onSubmit, loading, error};
};

