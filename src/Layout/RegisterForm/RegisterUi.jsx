import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'


const RegisterUi = () => {
    const { register, handleSubmit, errors } = useForm()


    return (
        <Grid centered>
            <Grid.Column style={{ maxWidth:550, marginTop:20 }}>
                <Header as="h2" color="green" style={{ textAlign:"center" }}>Sign Up Here</Header>
                <Segment>
                <Form style={{ padding:10 }}>
                    <Form.Field>
                        <Form.Input name="username" placeholder="username" label="Username"/>
                    </Form.Field>
                    <Form.Field>
                        <Form.Input name="firstName" placeholder="First Name" label="firstname"/>
                    </Form.Field>
                    <Form.Field>
                        <Form.Input name="lasttName" placeholder="Last Name" label="lastname"/>
                    </Form.Field>
                    <Form.Field>
                        <Form.Input name="email" type="email" placeholder="Email" label="email"/>
                    </Form.Field>
                    <Form.Field>
                        <Form.Input name="password" type="password" placeholder="Password" label="password"/>
                    </Form.Field>
                    <Button type='submit' color="green" fluid>Submit</Button>
                </Form>
                <Header style={{ textAlign:"center" }} as="h4">Login in here <Link to="/auth/login ">Login</Link> </Header>
                </Segment>
            </Grid.Column>

        </Grid>   
    )
}

export default RegisterUi
