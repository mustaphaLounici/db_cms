import React, { useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { auth } from "../../config/firebase";

function PrivatePage({ children }) {
  const user = auth.currentUser;
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        history.push("/");
      } else {
        history.push("/login");
      }
    });
  }, [history]);

  if (user) {
    return <>{children}</>;
  } else {
    return <Redirect to="/login" />;
  }
}

export default PrivatePage;
