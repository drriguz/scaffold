import {
    useNavigate,
} from "react-router-dom";
import { Button, Icon, IconSize, NonIdealState } from "@blueprintjs/core";

interface ErrorMessage {
    message: string;
}

function ErrorPage({ message }: ErrorMessage) {
    const navigate = useNavigate();
    return (
        <NonIdealState
            icon="error"
            title="Error"
            description={message}
            action={<Button icon="log-in" onClick={() => void navigate(-1)} text="Back"></Button>}
        />
    );
}

export default ErrorPage;