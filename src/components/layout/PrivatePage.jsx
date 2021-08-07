import React from "react";
import { Redirect } from "react-router-dom";
import { auth } from "../../config/firebase";

function PrivatePage({ children }) {
  const user = auth.currentUser;

  if (user) {
    return <>{children}</>;
  } else {
    return <Redirect to="/login" />;
  }
}

export default PrivatePage;
