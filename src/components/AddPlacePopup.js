import PopupWithForm from "./PopupWithForm"
import FormInput from "./FormInput"
import FormSubmitButton from "./FormSubmitButton"

const AddPlacePopup = (props) => {
  return (
    <PopupWithForm
      title="Новое место"
      name="add"
      isOpen={ props.isOpen }
      onClose={ props.onClose }
    >
      <FormInput
        type="text"
        name="card-name"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required="required"
      />
      <FormInput
        type="url"
        name="card-url"
        placeholder="Ссылка на картинку"
        required="required"
      />
      <FormSubmitButton text="Создать"/>
    </PopupWithForm>
  )
}

export default AddPlacePopup
