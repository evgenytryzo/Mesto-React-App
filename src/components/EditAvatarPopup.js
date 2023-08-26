import PopupWithForm from "./PopupWithForm"
import FormInput from "./FormInput"
import FormSubmitButton from "./FormSubmitButton"

const EditAvatarPopup = (props) => {
  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar"
      isOpen={ props.isOpen }
      onClose={ props.onClose }
    >
      <FormInput
        type="url"
        name="avtar"
        placeholder="Ссылка на картинку"
        required="required"
      />
      <FormSubmitButton text="Сохранить"/>
    </PopupWithForm>
  )
}

export default EditAvatarPopup
