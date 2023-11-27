import { createBrowserRouter } from "react-router-dom";
import { Root } from "../Root";
// import { KavakPage } from "../kavak/KavakPage";
import { Auth } from "../auth/Auth";
// import App from "../App";
// import { DashboardPage } from "../kavak/DashboardPage";
import { AuthLayout } from "../layout/AuthLayout";
import { DashboardLayout } from "../layout/DashboardLayout";
import { KavakPage } from "../kavak/KavakPage";
import { DashboardPage } from "../kavak/DashboardPage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
              path: 'auth',
              element: <AuthLayout />,
              children: [
                {
                  path: 'login',
                  element: <Auth />
                }
              ]
        
            },
            {
              path: '',
              element: <DashboardLayout />,
              children: [
                {
                  path: 'documents',
                  element: <KavakPage />
                },
                {
                  path: 'dashboard',
                  element: <DashboardPage />
                }
              ]
        
            },
        ]
    }
])

