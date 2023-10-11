import PopupWithForm from "./PopupWithForm"

const InfoTooltip = (props) => {


	console.log(props)
	return (
		<PopupWithForm
			isOpen={props.isOpen}
			onClose={props.onClose}
			name='infoTooltip'
			title='Вы успешно зарегистрировались!'
			icon="Картинка"
		/>
	)
}

export default InfoTooltip