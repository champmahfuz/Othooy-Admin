import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import AdminDashboardHome from '../pages/AdminDashboardHome/AdminDashboardHome';
import AdminLogin from '../pages/AdminLoginAndRegister/AdminLogin/AdminLogin';
import AdminRegister from '../pages/AdminLoginAndRegister/AdminRegister/AdminRegister';
import PersistLogin from '../PersistLogin/PersistLogin';
import { RequireAdminAuth } from '../hooks/RequireAdminAuth';
import Navbar from '../Shared/Navbar/Navbar';


const ROLES = {
    'User': 2001,
    'Editor': 1984,
    'Admin': 5150
}

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path="/navbar" element={<Navbar />} />
                <Route element={<PersistLogin />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                </Route>
                <Route path="login" element={<AdminLogin />} />
                <Route path="register" element={<AdminRegister />} />
                <Route element={<PersistLogin />}>
                    <Route element={<RequireAdminAuth allowedRoles={[ROLES.Editor, ROLES.Admin, ROLES.User]} />} >
                        <Route path="/admin/*" element={<AdminDashboardHome />} />
                    </Route>
                </Route>

            </Routes>
        </>
    );
};

export default Routers;