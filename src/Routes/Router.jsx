import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import EntryTheTrade from "../Pages/EntryTheTrade";
import EditTrade from "../components/EditTrade";
import NotFound from "../Pages/NotFound";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: '/entryTheTrade',
                element: <EntryTheTrade />
            },
            {
                path: '/update/:id',
                element: <EditTrade />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    },
]);