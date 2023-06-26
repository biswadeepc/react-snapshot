import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Form from './Form';
import Navigation from './Navigation';


const RootElement = (props) => {
    const navigate = useNavigate();
    // Prevent page reload, clear input, set URL and push history on submit
    const handleSubmit = (e, searchInput) => {
        e.preventDefault();
        e.currentTarget.reset();
        let url = `/search/${searchInput}`;
        //history.push(url);
        navigate(url);
    };
    return (
        <div className="container">
            <h1>SnapShot</h1>
            <Form handleSubmit={handleSubmit} />
            <Navigation />
            <main>
                <Outlet/>
            </main>
        </div>
        );
}

export default RootElement;