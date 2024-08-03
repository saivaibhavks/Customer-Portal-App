import cardData from "../Utils/CardData";
import Card from "./Card";
import "./Sidebar.css";

const Sidebar = ({ selectedCard, setSelectedCard }) => {
  return (
    <div className="card-container">
      {cardData.map((item, index) => {
        return (
          <Card
            item={item}
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          />
        );
      })}
    </div>
  );
};

export default Sidebar;
