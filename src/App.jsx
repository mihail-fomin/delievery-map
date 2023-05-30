import * as React from 'react'
import SignIn from './components/signIn/SignIn'

function App() {
	// переключаем скрины с помощью состояния
	const [screenType, setScreenType] = React.useState('auth')

	let isSignedIn = screenType !== 'auth'

	return (
		<>
			<div className="w-[90%] mx-auto flex flex-col items-center justify-center h-screen">
				{screenType === 'auth'
					? <SignIn setScreenType={setScreenType} />
					: 'map'}
			</div>
		</>
	)
}

export default App
