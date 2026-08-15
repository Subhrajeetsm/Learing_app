import React from "react";
import { SignUp } from "@clerk/clerk-react";

function Signup() {
  return (
    <div className="signup-page">
      <SignUp
        routing="path"
        path="/signup"
        signInUrl="/login"
        fallbackRedirectUrl="/"
      />
    </div>
  );
}

export default Signup;