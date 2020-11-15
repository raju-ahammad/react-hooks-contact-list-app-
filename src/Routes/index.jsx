import ContactContainer from "../Containers/Contact/ContactContainer"
import CreateContactContainer from "../Containers/CreateContact/CreateContactContainer"
import LoginContainer from "../Containers/Login/LoginContainer"
import RegisterContainer from "../Containers/Register/RegisterContainer"

const routes = [
    {
        path: "/user/register",
        component: RegisterContainer,
        title: "Register"
    },
    {
        path: "/user/login",
        component: LoginContainer,
        title: "Login"
    },
    {
        path: "/",
        component: ContactContainer,
        title: "Contact"
    },
    {
        path: "/contacts/create",
        component: CreateContactContainer,
        title: "Create Contact"
    }
    
]

export default routes;