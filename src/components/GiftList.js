import React from "react";
import { useState } from "react";

function Checkbox() {
  const [completed, setCompleted] = useState(false);

  // function onCompleted() {
  //   console.log(completed);
  //   setCompleted(true);
  // }
  return (
    <>
      <div>
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => {
              setCompleted(e.target.checked);
            }}
          />
          {completed === true ? "Complete!!!" : "Pending"}
        </label>
      </div>
    </>
  );
}

function GiftList({ gifts }) {
  return (
    <div>
      {gifts && (
        <ul>
          {gifts.map((gift) => (
            <div>
              <li>{gift.recipient}</li>
              <li>{gift.gift}</li>
              <li>{gift.store}</li>
              <li>{gift.price}</li>
              <li>{gift.extraInfo}</li>
              <div>
                <Checkbox />
              </div>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default GiftList;
