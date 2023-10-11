import Header from "./Header"
import Footer from "./Footer"
import { useState } from "react"
import Auth from "./Auth"

const Register = (props) => {
	  const [formValue, setFormValue] = useState({
			email: 'evgenytryzo@yandex.ru',
			password: '260202FaFa987655',
		})

		const handleChange = e => {
			const { name, value } = e.target

			setFormValue({
				...formValue,
				[name]: value,
			})

		}
const handleSubmit = e => {
	e.preventDefault()
	const { password, email } = formValue
	console.log(JSON.stringify({ password, email }))
	Auth(password, email)
		.then(data => console.log(data))
		.catch(error => {
			console.error(`Ошибка: ${error.message}`)
			console.error(`Status: ${error.status}`)
			console.error(error)
		})
}

	return (
		<section className='login-container'>
			<Header link='/sign-in' text='Вход' />
			<div className='login'>
				<h1 className='login__welcome'>Регистрация</h1>
				<form className='login__form' onSubmit={handleSubmit}>
					<input
						placeholder='email'
						className='login__input'
						id='email'
						required
						name='email'
						type='text'
						value={formValue.email}
						onChange={handleChange}
					/>
					<input
						className='login__input'
						placeholder='Пароль'
						id='password'
						required
						name='password'
						type='text'
						value={formValue.password}
						onChange={handleChange}
					/>
					<button
						type='submit'
						className='login__button'
						onClick={props.handleInfo}
					>
						Войти
					</button>
				</form>
			</div>
			<Footer />
		</section>
	)
}

export default Register