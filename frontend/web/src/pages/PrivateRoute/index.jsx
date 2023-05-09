import React, { useState } from "react";
import useLocalState from "../../util/useLocalStorage";
import { Navigate } from "react-router-dom";
import ajax from "../../services/fetchService";

export default function PrivateRoute({ children }) {
  const [jwt, setJwt] = useLocalState("", "jwt");
  const [isLoading, setLoading] = useState(true);
  const [isValid, setIsValid] = useState(null);

  if (jwt) {
    ajax(`/api/auth/validate?token=${jwt}`, "GET", jwt, null).then((result) => {
      setIsValid(result);
      setLoading(false);
    });
  } else {
    return <Navigate to="/login" />;
  }

  return isLoading ? (
    <div>Loading...</div>
  ) : isValid === true ? (
    children
  ) : (
    <Navigate to="/login" />
  );
}
