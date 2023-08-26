const Card = (cards) => {
  return (
    <>
      <button
        type="button"
        aria-label="Удалить"
        className="element__delete"
      />
      <img
        src={ cards.card.link }
        alt={ cards.card.name }
        className="element__photo"
      />
      <div className="element__container">
        <h2 className="element__name">{ cards.card.name }</h2>
        <div className="element__like-container">
          <button className="element__like-button" type="button" aria-label="Нравится"></button>
          <p className="element__like-count">{ cards.card.likes.length }</p>
        </div>
      </div>
    </>
  )
}

export default Card
