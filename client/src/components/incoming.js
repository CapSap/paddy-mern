import React, { useState, useEffect } from "react";

function Incoming() {
  const [fromDB, setFromDB] = useState("");

  useEffect(() => {
    fetch("/api/orders", { method: "GET", redirect: "follow" })
      .then((res) => res.json())
      .then((data) => setFromDB(data))
      .catch((error) => console.log("error", error));
  }, []);

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
