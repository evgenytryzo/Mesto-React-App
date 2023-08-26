import React from "react"

const PopupWithForm = (props) => {

  const handleOverlayClick = (e) => {
    if ( e.target === e.currentTarget ) {
      props.onClose()
    }
  }
  React.useEffect(() => {
    const handleEscKeyClose = (e) => {
      if ( e.key === "Escape" ) {
        props.onClose()
      }
    }

    if ( props.isOpen ) {
      document.addEventListener("keydown", handleEscKeyClose)
    }

    return () => {
      document.removeEventListener("keydown", handleEscKeyClose)
    }
  }, [ props.isOpen ])

  return (
    <div onMouseDown={ handleOverlayClick }
         className={ `popup popup_type_${ props.name } ${ props.isOpen ? "popup_opened" : "" }` }>

      <div className={ `popup__container popup__container_type_${ props.name }` }>

        <button type="button" aria-label="Закрыть" className="popup__close" onClick={ props.onClose }></button>

        <h2 className="popup__name">{ props.title }</h2>

        <form className={ `popup__form popup__form_${ props.name }` } name={ `${ props.name }-form` } noValidate>
          { props.children }
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm
