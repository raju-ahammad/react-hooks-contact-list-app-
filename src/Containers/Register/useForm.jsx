import { useState } from "react";

export default () => {
    const [form, setForm] = useState({});

    const onChange = (e, {name, value}) => {
        setForm({...form, [name]: value});
    }

    const registerdFormValid = 
        !form.username?.length ||
        !form.firstName?.length ||
        !form.lastName?.length ||
        !form.email?.length||
        !form.password?.length

    return {form, onChange, registerdFormValid};
};

