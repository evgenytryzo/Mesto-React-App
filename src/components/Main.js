import React from "react"

const Main = () => {

  React.useEffect(() => {

    const handleAddPlaceClick = () => {
      document.querySelector(".profile__add-button").addEventListener("click", () => {
        document.querySelector(".popup_type_add").classList.add("popup_opened")
      })
    }
    handleAddPlaceClick()

    const handleEditProfileClick = () => {
      document.querySelector(".profile__edit-button-link").addEventListener("click", () => {
        document.querySelector(".popup_type_edit").classList.add("popup_opened")
      })
    }
    handleEditProfileClick()

    const handleEditAvatarClick = () => {
      document.querySelector(".profile__avatar-edd").addEventListener("click", () => {
        document.querySelector(".popup_type_avatar").classList.add("popup_opened")
      })
    }
    handleEditAvatarClick()
  }, [])


  return (
    <main className="content">

      <section className="profile">

        <div className="profile__avatar-container">
          <button className="profile__avatar-edd"></button>
          <img className="profile__avatar" src="#" alt="Аватар профиля"/>
        </div>


        <div className="profile__info">

          <h1 className="profile__name"></h1>

          <button type="button" className="profile__edit-button profile__edit-button-link"></button>

          <p className="profile__about"></p>

        </div>

        <button type="button" className="profile__add-button"></button>

      </section>

      <section className="elements">

      </section>

    </main>
  )
}

export default Main
