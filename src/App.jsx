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
		localStorage.setItem('sign-in', true)
		setScreenType('map')
	}, [])

	return (
		<>
			{screenType === 'auth'
				? <SignIn signIn={handleLogIn} />
				: <Map logout={handleLogOut} />
			}
		</>
	)
}

export default App
