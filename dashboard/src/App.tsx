import * as React from "react";
import {
    Routes,
    Route,
    Link,
    useNavigate,
    useLocation,
    Navigate,
    Outlet,
} from "react-router-dom";

import { useAuth } from "react-oidc-context";
import { Button, Spinner } from "@blueprintjs/core";
import './App.css';
import LoginPage from "./admin/LoginPage";
import LandingPage from "./dashboard/LandingPage";
import HomePage from "./dashboard/HomePage";
import AdminPage from "./admin/AdminPage";

function RequireAuth({ children }: { children: JSX.Element }) {
    let auth = useAuth();
    let location = useLocation();

    if (!auth.isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}

function App() {
    const auth = useAuth();
    return (
        <>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="landing" element={<LandingPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route
                    path="/admin"
                    element={
                        <RequireAuth>
                            <AdminPage />
                        </RequireAuth>
                    }
                />
                <Route path="*" element={<p>There's nothing here: 404!</p>} />
            </Routes>
        </>
    );
}

export default App;