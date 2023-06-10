import * as React from 'react'
import SignIn from './components/signIn/SignIn'
import Map from './components/map/Map'


function App() {
	// переключаем скрины с помощью состояния
	const [screenType, setScreenType] = React.useState(() => {
		if (!!localStorage.getItem('sign-in')) {
			return 'map'
		} else {
			return 'auth'
		}
	})

	const handleLogOut = React.useCallback(() => {
		// очищаем весь localStorage, чтобы новый пользователь не увидел
		// ...изменения предидущего пользователя
		localStorage.clear()
		setScreenType('auth')
	}, [])

	const handleLogIn = React.useCallback(() => {
		// сохраняем запись об удачном входе в local storage
		localStorage.setItem('sign-in', true)
		// ... и меняем состояние на карту
		setScreenType('map')
	}, [])

	return (
		<>
			{/* делаем имитацию роутинга */}
			{screenType === 'auth'
				? <SignIn signIn={handleLogIn} />
				: <Map logout={handleLogOut} />
			}
		</>
	)
}

export default App
