import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home";

const Routes = createBrowserRouter( [
    {
        path: '/',
        element: <Main />,
        children: [
            {
                index: true,
                element: <Home/>
            }
        ]
    }
]);

export default Routes;