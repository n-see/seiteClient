
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import Login from "./Login";
import CreateAccount from "./CreateAccount/CreateAccount";
import Dashboard from "./Dashboard/Dashboard";
import ContactUs from "./ContactUs";
import StudentProfile from "./StudentProfile";

const router = createBrowserRouter([
    {path:'/', element: <HomePage/>},
    {path:'/Login', element: <Login/>},
    {path:'/CreateAccount', element: <CreateAccount/>},
    {path:'/Dashboard', element: <Dashboard/>},
    {path:'/Student', element: <StudentProfile/>},
    {path:'/Contact', element: <ContactUs/>},
])

export default router