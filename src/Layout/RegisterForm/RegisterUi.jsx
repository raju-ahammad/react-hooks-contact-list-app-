import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'


const RegisterUi = ({ form:{onChange, form, registerdFormValid} }) => {
    


    return (
        <Grid centered>
            <Grid.Column style={{ maxWidth:550, marginTop:20 }}>
                <Header as="h2" color="green" style={{ textAlign:"center" }}>Sign Up Here</Header>
                <Segment>
                <Form style={{ padding:10 }}>
                    <Form.Field>
                        <Form.Input value={form.username || ""} onChange={onChange} name="username" placeholder="username" label="Username"/> 
                    </Form.Field>
                    <Form.Field>
                        <Form.Input value={form.firstName || ""} onChange={onChange} name="firstName" placeholder="First Name" label="Firstname"/>
                    </Form.Field>
                    <Form.Field>
                        <Form.Input value={form.lastName || ""} onChange={onChange} name="lastName" placeholder="lastname" label="Lastname"/>
                    </Form.Field>
                    <Form.Field>
                        <Form.Input value={form.email || ""} onChange={onChange} name="email" type="email" placeholder="email" label="Email"/>
                    </Form.Field>
                    <Form.Field>
                        <Form.Input value={form.password || ""} onChange={onChange} name="password" type="password" placeholder="password" label="Password"/>
                    </Form.Field>
                    <Button disabled={ registerdFormValid} type='submit' color="green" fluid>Submit</Button>
                </Form>
                <Header style={{ textAlign:"center" }} as="h4">Login in here <Link to="/auth/login ">Login</Link> </Header>
                </Segment>
            </Grid.Column>

        </Grid>   
    )
}

export default RegisterUi
