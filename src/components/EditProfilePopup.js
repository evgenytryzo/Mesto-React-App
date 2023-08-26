import PopupWithForm from "./PopupWithForm"
import FormInput from "./FormInput"
import FormSubmitButton from "./FormSubmitButton"

const EditProfilePopup = (props) => {

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit"
      isOpen={ props.isOpen }
      onClose={ props.onClose }
    >
      <FormInput
        type="text"
        name="name"
        placeholder="Your name?"
        minLength="2"
        maxLength="40"
        required="required"
      />
      <FormInput
        type="text"
        name="about"
        placeholder="About you?"
        minLength="2"
        maxLength="200"
        required="required"
      />
      <FormSubmitButton text="Сохранить"/>
    </PopupWithForm>
  )
}

export default EditProfilePopup
