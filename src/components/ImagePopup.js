const ImagePopup = () => {
  return (
    <section className="popup popup_type_image">

      <figure className="popup__container popup__container_type_image">

        <button type="button" className="popup__close"></button>

        <img className="popup__image"
             src=""
             alt=""/>

        <figcaption className="popup__image-name"></figcaption>

      </figure>
    </section>
  )
}

export default ImagePopup
