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
import { Button, Card, Elevation, NonIdealState } from "@blueprintjs/core";

import { useAuth } from "react-oidc-context";

function LoginPage() {
    let auth = useAuth();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    
    return (
        <NonIdealState
            icon="shield"
            title="Login Required"
            description="In order to take further actions, you must be logged in."
            action={<Button icon="log-in" onClick={() => void auth.signinRedirect()} text="Login"></Button>}
        />
    );
}

export default LoginPage;