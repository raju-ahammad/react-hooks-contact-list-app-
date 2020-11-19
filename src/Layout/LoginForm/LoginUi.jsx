import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';


const LoginUi = ({ form:{onChange, form, loginFormValid, onSubmit, loading, error} }) => {

    return (
        <Grid centered>
            <Grid.Column style={{ maxWidth:550, marginTop:20 }}>
                <Header as="h2" color="green" style={{ textAlign:"center" }}>Sign Up Here</Header>
                <Segment>
                <Form style={{ padding:10 }}>
                    {error && <Message content={error?.detail} negative/>}
                    <Form.Field>
                        <Form.Input value={form.username || ""} onChange={onChange} name="username" placeholder="username" label="Username" /> 
                    </Form.Field>
                    <Form.Field>
                        <Form.Input value={form.password || ""} onChange={onChange} name="password" type="password" placeholder="password" label="Password" />
                    </Form.Field>
                    <Button loading={loading} onClick={onSubmit} disabled={ loginFormValid || loading} type='submit' color="green" fluid>Submit</Button>
                </Form>
                <Segment>Need an account <Link to="/auth/register">Register</Link> here </Segment>
                </Segment>
            </Grid.Column>

        </Grid>   
    )
}

export default LoginUi;
