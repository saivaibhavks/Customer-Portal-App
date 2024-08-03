import "./Card.css";

const Card = ({ item, selectedCard, setSelectedCard }) => {
  const selectCard = () => {
    setSelectedCard(item);
  };

  return (
    <div className="card__container" onClick={selectCard}>
      <div>
        <article
          className={`card__article ${
            selectedCard === item ? "selectedCardArticle" : ""
          }`}
        >
          <div
            className={`card__image ${
              selectedCard === item ? "selectedCardImage" : ""
            }`}
          >
            <img
              src={`assets/avatar-${item.index % 5 || 5}.png`}
              alt="Not Found"
              className={`card_img ${
                selectedCard === item ? "selectedCardImage" : ""
              }`}
            />
            <div className="card__shadow"></div>
          </div>

          <div className="card__data">
            <h3 className="card__name">{item.name}</h3>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Card;
