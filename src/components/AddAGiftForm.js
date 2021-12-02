import React from "react";

function AddAGiftForm({
  gift,
  setGift,
  recipient,
  setRecipient,
  store,
  setStore,
  price,
  setPrice,
  extraInfo,
  setExtraInfo,
  completed,
  setCompleted,
}) {
  const handleSubmit = async () => {
    const newGift = {
      recipient: recipient,
      gift: gift,
      store: store,
      price: price,
      extraInfo: extraInfo,
      completed: completed,
    };

    const response = await fetch("/api/gifts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newGift),
    });
    const data = await response.text();
    console.log(data);
  };
  return (
    <div>
      <label>Recipient Name:</label>
      <input
        value={recipient}
        onChange={(event) => {
          setRecipient(event.target.value);
        }}
      />
      <label>Gift Name:</label>
      <input
        value={gift}
        onChange={(event) => {
          setGift(event.target.value);
        }}
      />
      <label>Store:</label>
      <input
        value={store}
        onChange={(e) => {
          setStore(e.target.value);
        }}
      />
      <label>Item Price:</label>
      <input
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      <label>Extra Info:</label>
      <textarea
        value={extraInfo}
        onChange={(e) => {
          setExtraInfo(e.target.value);
        }}
      />
      <label>Purchse Completed:</label>
      <textarea
        value={completed}
        onChange={(e) => {
          setExtraInfo(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>Add New Gift</button>
    </div>
  );
}
export default AddAGiftForm;
