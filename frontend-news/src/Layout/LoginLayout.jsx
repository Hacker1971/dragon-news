import React from 'react';
import NavigatorBar from '../shared/NavigatorBar';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <NavigatorBar></NavigatorBar>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;