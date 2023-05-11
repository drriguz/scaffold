import {
    Alignment,
    Button,
    Classes,
    Navbar,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading,
} from "@blueprintjs/core";

import { useAuth } from "react-oidc-context";
import { useNavigate } from "react-router-dom";

interface NavigationData {
    title: string;
    dark?: boolean;
}

function TopBar({title, dark=false}: NavigationData) {
    const navigate = useNavigate();
    const auth = useAuth();

    const getUserName = () => {
        let displayName = `${auth.user?.profile?.given_name} ${auth.user?.profile?.family_name}`;
        displayName = displayName.trim();

        if (displayName != '')
            return displayName;
        else
            return auth.user?.profile?.email || 'Anonymous user';
    }

    const authStatus = () => {
        if (auth.isAuthenticated) {
            return (
                <>
                    {getUserName()}
                    <Button className={Classes.MINIMAL} icon="log-out" minimal
                        text="Logout" onClick={() => void auth.signoutRedirect()} />
                </>
            );
        } else {
            return (
                <Button className={Classes.MINIMAL} icon="log-in"
                    minimal text="Login" onClick={() => void auth.signinRedirect()} />
            );
        }
    };

    return (
        <Navbar fixedToTop className={dark ? "bp4-dark": ""}>
            <NavbarGroup align={Alignment.LEFT}>
                <NavbarHeading>{title}</NavbarHeading>
                <NavbarDivider />
                <Button className={Classes.MINIMAL} icon="home" text="Home" onClick={() => navigate("/")} />
                <Button className={Classes.MINIMAL} icon="cube" text="Dashboard" onClick={() => navigate("/dashboard")} />
            </NavbarGroup>
            <NavbarGroup align={Alignment.RIGHT}>
                <Button className={Classes.MINIMAL} icon="info-sign" minimal />
                <Button className={Classes.MINIMAL} icon="cog" minimal onClick={() => navigate("/admin")} />
                <NavbarDivider />
                {authStatus()}
            </NavbarGroup>
        </Navbar>
    );
}

export default TopBar;