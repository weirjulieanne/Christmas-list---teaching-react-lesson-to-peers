import { useEffect, useState } from "react";
import "./App.css";
import PageTitle from "./components/PageTitle";
import GiftList from "./components/GiftList";
import AddAGiftForm from "./components/AddAGiftForm";
function App() {
  const [gifts, setGifts] = useState();
  const [gift, setGift] = useState("");
  const [recipient, setRecipient] = useState("");
  const [store, setStore] = useState("");
  const [price, setPrice] = useState("");
  const [extraInfo, setExtraInfo] = useState("");

  useEffect(() => {
    const getGifts = async () => {
      const response = await fetch("/api/gifts");
      const data = await response.json();
      setGifts(data);
    };
    getGifts();
  }, []);

  return (
    <div className="App">
      <br />
      <PageTitle text={"Gift List 2021!!!"} fontSize={15} />
      <GiftList gifts={gifts} />
      <AddAGiftForm
        gift={gift}
        setGift={setGift}
        recipient={recipient}
        setRecipient={setRecipient}
        store={store}
        setStore={setStore}
        price={price}
        setPrice={setPrice}
        extraInfo={extraInfo}
        setExtraInfo={setExtraInfo}
      />
    </div>
  );
}

export default App;
//
