import Header from "./Header"
import Footer from "./Footer"

const test = "12"

const Register = () => {
	return (
		<section className='login-container'>
			<Header link='/sign-in' text='Вход' />
			<div onSubmit={test} className='login'>
				<h1 className='login__welcome'>Регистрация</h1>
				<form className='login__form'>
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
						onChange={test}
					/>
					<button type='submit' className='login__button'>
						Войти
					</button>
				</form>
			</div>
			<Footer />
		</section>
	)
}

export default Register