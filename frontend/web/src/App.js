function App() {
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
      const authValue = headers.get("authorization");
      console.log(authValue);
    });

  return <div className="App">Hello world</div>;
}

export default App;
