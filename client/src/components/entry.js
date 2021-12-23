import React from "react";

function Entry() {
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
        <label for="order-number">Order Number: </label>
        <input type="text" id="order-number" value="1234"></input>
        <label for="customer-name">Customer Name: </label>
        <input type="text" id="customer-name" value="customer name"></input>
        <label for="stores">Items Needed:</label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Entry;
