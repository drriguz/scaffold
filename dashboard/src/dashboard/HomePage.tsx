import * as React from "react";
import {
    Alignment,
    Button,
    Classes,
    H5,
    Navbar,
    Divider,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading,
    Switch,
} from "@blueprintjs/core";

import { useAuth } from "react-oidc-context";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";
import ErrorPage from "../admin/ErrorPage";

function HomePage() {
    let auth = useAuth();
    switch (auth.activeNavigator) {
        case "signinSilent":
            return <div>Signing you in...</div>;
        case "signoutRedirect":
            return <div>Signing you out...</div>;
    }

    if (auth.isLoading) {
        return <div>Loading...</div>;
    }

    if (auth.error) {
        return <ErrorPage message={auth.error.message} />
    }

    return (
        <TopBar title="Prompt Platform"/>
    );
}

export default HomePage;