const PopupWithForm = (props) => {
  return (
    <div className={ `popup popup_type_${ props.name }` }>
      <div className="popup__container">
        <button type="button" aria-label="Закрыть" className="popup__close"></button>
        <h2 className="popup__name">{ props.title }</h2>
        <form className={ `popup__form popup__form_${ props.name }` } name={ `${ props.name }-form` } noValidate>
          { props.children }
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm
