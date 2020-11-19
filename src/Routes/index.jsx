import ContactContainer from "../Containers/Contact/ContactContainer"
import CreateContactContainer from "../Containers/CreateContact/CreateContactContainer"
import LoginContainer from "../Containers/Login/LoginContainer"
import RegisterContainer from "../Containers/Register/RegisterContainer"

const routes = [
    {
        path: "/auth/register",
        component: RegisterContainer,
        title: "Register",
        needsAuth: false
    },
    {
        path: "/auth/login",
        component: LoginContainer,
        title: "Login",
        needsAuth: false
    },
    {
        path: "/",
        component: ContactContainer,
        title: "Contact",
        needsAuth: true
    },
    {
        path: "/contacts/create",
        component: CreateContactContainer,
        title: "Create Contact",
        needsAuth: false
    }
    
]

export default routes;