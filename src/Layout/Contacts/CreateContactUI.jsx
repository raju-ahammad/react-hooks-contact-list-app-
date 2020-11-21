import React from 'react'
import { Button, Card, Form, Grid, Header, Select } from 'semantic-ui-react'
import country from '../../Utils/country'
import "./contact.css"
const CreateContactUI = ({onChange}) => {
    return (
        <Grid centered>
            <Grid.Column className="form-column">
                <Header>Create Contact</Header>
                <Card fluid>
                    <Card.Content>
                        <Form unstackable>
                            <div className="contactPicture">
                                <span>Choose a picture</span>
                            </div>
                            <Form.Group widths={2}>
                                <Form.Input onChange={onChange} name = "firstName" label="First name" placeholder=" first name"/>
                                <Form.Input onChange={onChange} name = "lastName" label="Last name" placeholder=" Last name"/>
                            </Form.Group>
                            <Form.Group widths={2}>
                                <Form.Input onChange={onChange} control={Select} options={country} name = "countryCode" label="country" placeholder=" country"/>
                                <Form.Input onChange={onChange} name = "phoneNumber" label="Phone Number" placeholder="phone number"/>
                            </Form.Group>
                            <Form.Group widths={3}>
                                <Form.Checkbox onChange={(e, data) => {
                                    onChange(e, {name:"isFavorite", value: data.checked})
                                }} name = "isFavorite" label="Add to favrioute" />
                            </Form.Group>
                            <Button fluid  color = "green" type="submit">Submit</Button>
                        </Form>
                    </Card.Content>
                </Card>
            </Grid.Column>
        </Grid>
    )
}

export default CreateContactUI
