import BodyComponent from "./BodyComponent";
import Heading from "./Heading";
import Sidebar from "./Sidebar";
import "./AppLayout.css";
import { useState } from "react";
import cardData from "../Utils/CardData";

const AppLayout = () => {
  const [selectedCard, setSelectedCard] = useState(cardData[0]);
  return (
    <>
      <Heading />
      <div className="container">
        <Sidebar
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
        />
        <BodyComponent selectedCard={selectedCard} />
      </div>
    </>
  );
};

export default AppLayout;
