import React, { useState, useEffect } from "react";

function StorePicker(store, changeStore) {
  return (
    <div>
      <label htmlFor="chooseStore">Your store location: </label>
      <select
        id="chooseStore"
        value={store}
        onChange={(e) => {
          changeStore(e);
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
        <option value="Online">Online</option>
      </select>
    </div>
  );
}

export default StorePicker;
