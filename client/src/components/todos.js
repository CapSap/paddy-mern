import React, { useState } from "react";

function Todos() {
  const [store, setStore] = useState();

  function handleChange(e) {
    setStore(e.target.value);
  }

  return (
    <div>
      <label htmlFor="chooseStore">Choose your store: </label>
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
      <br />
      Action for you:
      {/* get database info /specific query here to show all orders with status not done + has an item that needs to be sent to a store */}
    </div>
  );
}

export default Todos;
