import React from "react";
import useLocalState from "../../util/useLocalStorage";

export default function Dashboard() {
  const [jwt, setJwt] = useLocalState("", "jwt");

  return <div>{jwt}</div>;
}
