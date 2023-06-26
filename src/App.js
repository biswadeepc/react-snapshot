import React from "react";
import PhotoContextProvider from "./context/PhotoContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home';
import RootElement from "./components/Root";
import Item from "./components/Item";
import Search from "./components/Search";
import NotFound from "./components/NotFound";
import Error from "./components/Error";

const App = (props) => {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <RootElement history={props.history} />,
            errorElement: <Error />,
            children: [
                { index: true, element: <Home /> },
                { path: '/mountain', element: <Item searchTerm="mountain" /> },
                { path: '/beach', element: <Item searchTerm="beach" /> },
                { path: '/bird', element: <Item searchTerm="bird" /> },
                { path: '/food', element: <Item searchTerm="food" /> },
                { path: '/search/:searchInput', element: <Search /> },
                { path: '/*', element: <NotFound /> }

            ]
        }
    ]);

    return (
        <PhotoContextProvider>
            <RouterProvider router={router} />
        </PhotoContextProvider>
    );

}

export default App;

