import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from "react-oidc-context";
const oidcConfig = {
    authority: "http://localhost:8080/realms/okapia",
    client_id: "dashboard",
    client_secret: "VeDqhwQa3NUoDiFXjvbKSASFM3bp77pV",
    redirect_uri: "http://localhost:3000/",
};

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider {...oidcConfig}>
                <App />
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
