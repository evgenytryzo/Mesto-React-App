const Card = (props) => {


  function handleClick() {
    props.onCardClick(props.card)
  }
  return (
    <>
      <button
        type="button"
        className="element__delete"
      />
      <img
        onClick={handleClick}
        src={ props.card.link }
        alt={ props.card.name }
        className="element__photo"
      />
      <div className="element__container">
        <h2 className="element__name">{ props.card.name }</h2>
        <div className="element__like-container">
          <button className="element__like-button" type="button"></button>
          <p className="element__like-count">{ props.card.likes.length }</p>
        </div>
      </div>
    </>
  )
}
export default Card
