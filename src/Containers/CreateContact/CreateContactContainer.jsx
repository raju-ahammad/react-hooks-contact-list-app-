import React, { useState } from 'react'
import { Container } from 'semantic-ui-react'
import CreateContactUI from '../../Layout/Contacts/CreateContactUI'

const CreateContactContainer = () => {
    
    const [form, setForm] = useState({})
    const onChange = (e, {name, value}) => {
        setForm({...form, [name]:value})
    }
    console.log("Form", form);
    return (
        <Container>
            <CreateContactUI onChange = { onChange } form={form} />
        </Container>
    )
}

export default CreateContactContainer
