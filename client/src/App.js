import React, { useState, useEffect } from "react";

import "./App.css";
import Entry from "./components/entry";
import Incoming from "./components/incoming";
import Todos from "./components/todos";
import StorePicker from "./components/storePicker";

function App() {
  const [fromDB, setFromDB] = useState("");

  const [store, setStore] = useState();

  function changeStore(e) {
    setStore(e.target.value);
  }

  useEffect(() => {
    fetch("/api/orders", { method: "GET", redirect: "follow" })
      .then((res) => res.json())
      .then((data) => setFromDB(data))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className="App">
      <Entry />
      <StorePicker store={store} changeStore={changeStore} />
      <Todos />
      <Incoming fromDB={fromDB} />
    </div>
  );
}

export default App;
