import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import useLocalState from "./util/useLocalStorage";
import Dashboard from "./pages/Dashboard";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import PrivateRoute from "./pages/PrivateRoute";

function App() {
  const [jwt, setJwt] = useLocalState("", "jwt");

  useEffect(() => {
    const body = {
      username: "sonthuol",
      password: "240100",
    };

    fetch("api/auth/login", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify(body),
    })
      .then((response) => Promise.all([response.json(), response.headers]))
      .then(([body, headers]) => {
        setJwt(headers.get("authorization"));
      });
  });

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;