import Footer from "./Footer"
import Header from "./Header"

const test = "123"

const Login = () => {
	return (
		<section className='login-container'>
			<Header link='/sign-up' text='Регистрация' />
			<div onSubmit={test} className='login'>
				<h1 className='login__welcome'>Вход</h1>
				<form className='login__form'>
					<input
						className='login__input'
						id='username'
						required
						name='username'
						type='text'
						value='test'
						onChange='{test}'
					/>
					<input
						className='login__input'
						id='password'
						required
						name='password'
						type='text'
						value='{test}'
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
export default Login