import React, { useState, useEffect } from "react";

import "./App.css";
import Entry from "./components/entry";
import Incoming from "./components/incoming";
import Todos from "./components/todos";

function App() {
  const [fromDB, setFromDB] = useState("");

  const [store, setStore] = useState();

  function handleChange(e) {
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
      <label htmlFor="chooseStore">Your store location: </label>
      <select
        id="chooseStore"
        value={store}
        onChange={(e) => {
          handleChange(e);
        }}
      >
        <option value="Canberra">Canberra - 213</option>
        <option value="Fortitude Valley">Fortitude Valley - 416</option>
        <option value="Hobart">Hobart - 710</option>
        <option value="Melbourne">Melbourne - 314</option>
        <option value="Parramatta">Parramatta - 208</option>
        <option value="Perth">Perth - 615</option>
        <option value="Ringwood">Ringwood - 319</option>
        <option value="Sydney">Sydney - 210</option>
      </select>
      <Todos />
      <Incoming fromDB={fromDB} />
    </div>
  );
}

export default App;
