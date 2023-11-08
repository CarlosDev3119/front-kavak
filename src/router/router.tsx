import { createBrowserRouter } from "react-router-dom";
import { Root } from "../Root";
// import { KavakPage } from "../kavak/KavakPage";
import { Auth } from "../auth/Auth";
import App from "../App";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            //Dashboard Routes
            {
                path: 'dashboard',
                element: <App />
            },
            //AuthRoutes
            {
                path: 'auth',
                element: <Auth />,
          
            }
        ]
    }
])

