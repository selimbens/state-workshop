import logo from "./logo.svg";
import "./App.css";

import Login from "./components/Login";
import List from "./components/List";
import { useState } from "react";

function App() {
  const [data, setData] = useState([])

  fetch("https://reqres.in/api/users?page=1")
    .then((response) => response.json())
    .then((d) => {
      setData(d.data)
    });

  return (
    <div className="App">
      <Login />

      <List data={data} />
    </div>
  );
}

export default App;
