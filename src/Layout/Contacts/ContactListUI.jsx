import React from 'react';
import { Container, Image, List, Placeholder } from 'semantic-ui-react';

const ContactListUI = ( {state: {contacts:{ loading, error, data }}}) => {
    console.log("loading:", loading);
    console.log("data", data);
    return (
        <div>
            <Container>
            {loading && <>
            <Placeholder>
            <Placeholder.Header image>
                <Placeholder.Line>

                </Placeholder.Line>
            </Placeholder.Header>
            <Placeholder.Paragraph>
                <Placeholder.Line>
                </Placeholder.Line>
                <Placeholder.Line>
                </Placeholder.Line>
            </Placeholder.Paragraph>
            </Placeholder>
            </>}
            <List>
                {
                    data.length && data.map(contact=>(
                        <List.Item>
                            <List.Content floated="right">
                                <span> {contact.phone_number} Phone NUmber </span>
                            </List.Content>
                            <List.Content style ={{ display: "flex", alignItems: "center" }}>
                                <Image src={ contact.contact_picture } width={45}/>
                                Image
                            </List.Content>
                            <span> {contact.first_name} {contact.first_name}</span>
                        </List.Item>
                    ))
                }
            </List>
            </Container>
        </div>
    )
}

export default ContactListUI
