const Auth = (password, email) => {
	const BASE_URL = 'https://auth.nomoreparties.co'
	return fetch(`${BASE_URL}/signup`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ password, email }),
	}).then(checkResponse)
}

function checkResponse(res) {
	if (res.ok) {
		return res.json()
	}
	// если сервер вернул статус ответа 400 или больше
	return res.json().then(err => Promise.reject({ ...err, status: res.status }))
}

export default Auth
