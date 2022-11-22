import Main from "../../Layout/Main";
import Category from "../../Pages/Category/Category";
import Home from "../../Pages/Home/Home";
import LogIn from "../../Pages/LogIn/LogIn";
import News from "../../Pages/News/News";
import Profile from "../../Pages/Others/Profile";
import Terms from "../../Pages/Others/Terms";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element:<Home />,
                loader: () => fetch('https://dragon-news-server-zeta-lime.vercel.app/news')
            },
            {
                path: '/category/:id',
                element: <Category />,
                loader: ({params}) => fetch(`https://dragon-news-server-zeta-lime.vercel.app/category/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><News /></PrivateRoute>,
                loader: ({params}) => fetch(`https://dragon-news-server-zeta-lime.vercel.app/news/${params.id}`)
            },
            {
                path: '/login',
                element: <LogIn />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/terms',
                element: <Terms />
            }
            ,
            {
                path: '/profile',
                element: <PrivateRoute><Profile /></PrivateRoute>
            }
        ]    
    }
])