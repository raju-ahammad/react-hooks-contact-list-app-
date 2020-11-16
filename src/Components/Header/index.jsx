import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button, Icon, Image, Menu } from 'semantic-ui-react'
import logo from "../../Assets/Images/logo.svg"

const shadow = {
    boxShadow: "0 1px 6px 0 rgba(0, 0, 0, 0.1), 0 2px 5px 0 rgba(0, 0, 0, 0.15)"
}

const Header = () => {

    const { pathname } = useLocation();
    console.log(pathname);
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
                {pathname === "/" && (
                    <Menu.Item position="right">
                    <Button as={Link} to="/contacts/create" primary basic icon >
                        <Icon name="add"> </Icon>
                        Create Contact
                    </Button>
                </Menu.Item>
                )}
                {pathname === "/" && (
                    <Menu.Item>
                    <Button as={Link} to="/auth/register"  color="green"  icon>
                        <Icon name="sign in"></Icon>
                    SignUp
                    </Button>
                </Menu.Item>
                )}
                {pathname === "/" && (
                    <Menu.Item>
                    <Button  color="red" basic icon>
                        <Icon name="log out"></Icon>
                    Login
                    </Button>
                </Menu.Item>
                )}
                
            </Menu>
        </>
    )
}

export default Header;
