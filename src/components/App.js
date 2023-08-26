import "../App.css"
import Footer from "./Footer.js"
import Header from "./Header.js"
import Main from "./Main.js"
import React from "react"
import EditProfilePopup from "./EditProfilePopup"
import AddPlacePopup from "./AddPlacePopup"
import EditAvatarPopup from "./EditAvatarPopup"
import ClosePopup from "./ClosePopup"
import ImagePopup from "./ImagePopup"

const App = () => {
  const [ isEditProfilePopupOpen, setIsEditProfilePopupOpen ] = React.useState(false)
  const [ isAddPlacePopupOpen, setIsAddPlacePopupOpen ] = React.useState(false)
  const [ isEditAvatarPopupOpen, setIsEditAvatarPopupOpen ] = React.useState(false)

  const handleAddPlaceClick = () => setIsAddPlacePopupOpen(true)
  const handleEditProfileClick = () => setIsEditProfilePopupOpen(true)
  const handleEditAvatarClick = () => setIsEditAvatarPopupOpen(true)

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
  }

  return (

      <div className="page">

        <Header/>

        <Main onEditProfile={ handleEditProfileClick } onAddPlace={ handleAddPlaceClick }
              onEditAvatar={ handleEditAvatarClick }/>

        <Footer/>

        <EditProfilePopup isOpen={ isEditProfilePopupOpen } onClose={ closeAllPopups }/>

        <AddPlacePopup isOpen={ isAddPlacePopupOpen } onClose={ closeAllPopups }/>

        <EditAvatarPopup isOpen={ isEditAvatarPopupOpen } onClose={ closeAllPopups }/>

        <ClosePopup/>

        <ImagePopup/>
      </div>



  )
}

export default App
