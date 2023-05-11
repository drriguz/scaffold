import { useAuth } from "react-oidc-context";
import TopBar from "../components/TopBar";


function AdminPage() {
    let auth = useAuth();
    return (
        <TopBar  title="Admin" dark/>
    );
}

export default AdminPage;