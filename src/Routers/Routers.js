import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Pages/Blog/Blog";
import Checkout from "../Components/Pages/Courses/CourseDetails/Checkout/Checkout";
import CourseDetails from "../Components/Pages/Courses/CourseDetails/CourseDetails";
import Courses from "../Components/Pages/Courses/Courses";
import Error from "../Components/Pages/Error/Error";
import FAQ from "../Components/Pages/FAQ/FAQ";
import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Pages/Login/Login";
import Profile from "../Components/Pages/Profile/Profile";
import Signup from "../Components/Pages/Signup/Signup";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/courses',
                loader: () => fetch('https://assignment-10-server-mdfaysal22.vercel.app/courses'),
                element:<Courses></Courses>
            },
            {
                path:'/coursedetails/:id',
                loader: ({params}) => fetch(`https://assignment-10-server-mdfaysal22.vercel.app/courses/${params.id}`),
                element:<CourseDetails></CourseDetails>
            },
            {
                path:'/checkout/:id',
                loader: ({params}) => fetch(`https://assignment-10-server-mdfaysal22.vercel.app/courses/${params.id}`),
                element:<Checkout></Checkout>
            },
            {
                path:'/faq',
                element:<FAQ></FAQ>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'signup',
                element:<Signup></Signup>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/profile',
                element:<Profile></Profile>
            },
            {
                path:'*',
                element:<Error></Error>
            }
        ]
    },

])