import Footer from "./Footer"
import FormInput from "./FormInput"
import FormSubmitButton from "./FormSubmitButton"
import Header from "./Header"
import { useState } from "react"
import PopupWithForm from "./PopupWithForm"


const Login = (props) => {
  const handleSubmit = e => {
		e.preventDefault()
	}
	
	return (
		<>
			<section className='login-container'>
				<Header link='/sign-up' text='Регистрация' />
				<div className='login'>
					<h1 className='login__welcome'>Вход</h1>
					<form className='login__form' onSubmit={handleSubmit}>
						<input
							className='login__input'
							id='username'
							required
							name='username'
							type='text'
							value='Email'
							onChange='{test}'
						/>
						<input
							className='login__input'
							id='password'
							required
							name='password'
							type='text'
							value='Пароль'
						/>
						<button
							type='submit'
							className='login__button'
							
						>
							Войти
						</button>
					</form>
				</div>
				<Footer />
			</section>
		</>
	)
}
export default Login