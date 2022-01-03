import React, { useState, useEffect } from "react";

function Incoming({ fromDB }) {
  return (
    <div>
      Orders to be picked up from your store:
      <ul>
        {fromDB
          ? fromDB.map((x) => {
              return (
                <li key={x.orderNumber}>
                  <p>
                    Order: {x.orderNumber} for {x.customerName}
                  </p>

                  {x.orderedItems.map((y) => {
                    return (
                      <p>
                        {y.sendingStore} sending {y.item}
                      </p>
                    );
                  })}
                </li>
              );
            })
          : "Data Loadding"}
      </ul>
    </div>
  );
}

export default Incoming;
