import React, { useState } from "react";

function Entry() {
  const [orderInfo, setOrderInfo] = useState({});

  function handleChange(e) {
    let name = e.target.id;
    let value = e.target.value;
    console.log(e.target.name);
    setOrderInfo({
      ...orderInfo,
      [name]: value,
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    for (let i = 0; i < e.target.length - 1; i++) {
      console.log("button pressed " + e.target[i].value);
    }
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          onSubmit(e);
        }}
      >
        <label for="orderNumber">Order Number: </label>
        <input
          type="text"
          id="orderNumber"
          value={orderInfo.orderNumber}
          onChange={(e) => handleChange(e)}
        ></input>
        <label for="customer-name">Customer Name: </label>
        <input
          type="text"
          id="customerName"
          value={orderInfo.customerName}
          onChange={(e) => {
            handleChange(e);
          }}
        ></input>
        <label for="stores">Items Needed:</label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Entry;
