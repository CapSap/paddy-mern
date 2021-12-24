import React, { useState } from "react";

function Entry() {
  const [orderInfo, setOrderInfo] = useState({
    orderStatus: "waiting to be sent",
  });

  function handleChange(e) {
    let name = e.target.id;
    let value = e.target.value;
    setOrderInfo({
      ...orderInfo,
      [name]: value,
    });
  }

  function handleOrderedItemsChange(e) {
    let name = e.target.id;
    let value = e.target.value;
    setOrderInfo({
      ...orderInfo,
      orderedItems: {
        ...orderInfo.orderedItems,
        [name]: e.target.value,
      },
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    console.log(orderInfo);
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          onSubmit(e);
        }}
      >
        <label htmlFor="orderNumber">Order Number: </label>
        <input
          type="text"
          id="orderNumber"
          value={orderInfo.orderNumber}
          onChange={(e) => handleChange(e)}
        ></input>
        <label htmlFor="customer-name">Customer Name: </label>
        <input
          type="text"
          id="customerName"
          value={orderInfo.customerName}
          onChange={(e) => {
            handleChange(e);
          }}
        ></input>
        <label htmlFor="pickupStore">Pickup Location: </label>
        <select
          id="pickupStore"
          value={orderInfo.pickupStore}
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
        <label htmlFor="items">Items needed: </label>
        <textarea
          id="item"
          onChange={(e) => {
            handleOrderedItemsChange(e);
          }}
        />
        <label htmlFor="sendingStore">Sending Location: </label>
        <select
          id="sendingStore"
          onChange={(e) => {
            handleOrderedItemsChange(e);
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
        <label htmlFor="notes">Notes: </label>
        <textarea
          id="notes"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <button type="submit">Send</button>
      </form>
      Order Status: {orderInfo.orderStatus}
    </div>
  );
}

export default Entry;
