import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';


const RegisterUi = ({ form:{onChange, form, registerdFormValid, onSubmit, loading, fieldErrors} }) => {
    console.log(fieldErrors);

    return (
        <Grid centered>
            <Grid.Column style={{ maxWidth:550, marginTop:20 }}>
                <Header as="h2" color="green" style={{ textAlign:"center" }}>Sign Up Here</Header>
                <Segment>
                <Form style={{ padding:10 }}>
                    <Form.Field>
                        <Form.Input value={form.username || ""} onChange={onChange} name="username" placeholder="username" label="Username" 
                        error={
                            fieldErrors.username && {
                                content: fieldErrors.username,
                                pointing: "below"
                            }
                        }
                        /> 
                    </Form.Field>
                    <Form.Field>
                        <Form.Input value={form.firstName || ""} onChange={onChange} name="firstName" placeholder="First Name" label="Firstname"
                        error={
                            fieldErrors.first_name && {
                                content: fieldErrors.first_name,
                                pointing: "below"
                            }
                        }
                        />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input value={form.lastName || ""} onChange={onChange} name="lastName" placeholder="lastname" label="Lastname"
                        error={
                            fieldErrors.last_name && {
                                content: fieldErrors.last_name,
                                pointing: "below"
                            }
                        }
                        />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input value={form.email || ""} onChange={onChange} name="email" type="email" placeholder="email" label="Email" 
                        error={
                            fieldErrors.email && {
                                content: fieldErrors.email,
                                pointing: "below"
                            }
                        }
                        />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input value={form.password || ""} onChange={onChange} name="password" type="password" placeholder="password" label="Password" 
                        error={
                            fieldErrors.password && {
                                content: fieldErrors.password,
                                pointing: "below"
                            }
                        }
                        />
                    </Form.Field>
                    <Button loading={loading} onClick={onSubmit} disabled={ registerdFormValid || loading} type='submit' color="green" fluid>Submit</Button>
                </Form>
                <h3 style={{ textAlign:"center" }} > <Header as={Link} to="/auth/login">Login</Header> in here</h3>
                </Segment>
            </Grid.Column>

        </Grid>   
    )
}

export default RegisterUi
