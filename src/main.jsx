import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-xi66tbymj4q3w4qc.us.auth0.com"
      clientId="Iokb0kcWikqUcE8SvTGoX6XbRhTuImwy"
      authorizationParams={{
        redirect_uri: "https://real-estate-new-frontend.onrender.com/",
      }}
      audience="https://real-estate-new-w4x4.onrender.com"
      scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </StrictMode>
);
