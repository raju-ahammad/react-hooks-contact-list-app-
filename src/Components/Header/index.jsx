import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Icon, Image, Menu } from 'semantic-ui-react'
import logo from "../../Assets/Images/logo.svg"


const shadow = {
    boxShadow: "0 1px 6px 0 rgba(0, 0, 0, 0.1), 0 2px 5px 0 rgba(0, 0, 0, 0.15)"
}
const index = () => {
    return (
        <>
            <Menu secondary style={ shadow } >
                
                <Image src={logo} size="tiny" />
                <Menu.Item
                as={Link} to="/"
                style={{ fontSize: "24px" }}
                name='trulyContact'
                />
                <Menu.Item
                as={Link} to="/"
                name='Home'
                />
                
                <Menu.Item position="right">
                    <Button as={Link} to="/contacts/create" primary basic icon >
                        <Icon name="add"> </Icon>
                        Create Contact
                    </Button>
                </Menu.Item>
                <Menu.Item>
                    <Button  color="red" basic icon>
                        <Icon name="log out"></Icon>
                    Login
                    </Button>
                </Menu.Item>
            </Menu>
        </>
    )
}

export default index
