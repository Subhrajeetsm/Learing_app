import React from "react";
import { SignIn } from "@clerk/clerk-react";

function Login() {
  return (
    <div className="login-page">
      <SignIn
        routing="path"
        path="/login"
        signUpUrl="/signup"
        fallbackRedirectUrl="/"
      />
    </div>
  );
}

export default Login;