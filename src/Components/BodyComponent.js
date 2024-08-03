import PhotoGrid from "./PhotoGrid";
import "./BodyComponent.css";

const BodyComponent = ({ selectedCard }) => {
  return (
    <div className="body-container">
      <div className="data">
        <div>
          <div className="text">Hi👋 I'm {selectedCard.name}</div>
          <div className="text">{selectedCard.title}</div>
          <div className="text">{selectedCard.address}</div>
        </div>
        <div>
          <img
            src={`assets/avatar-${selectedCard.index % 5 || 5}.png`}
            alt="Not Found"
          />
        </div>
      </div>
      <PhotoGrid />
    </div>
  );
};

export default BodyComponent;
