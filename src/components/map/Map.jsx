import * as React from 'react'
import initialPoints from '../../../public/model'
import { MapPinIcon } from '@heroicons/react/24/solid'



export default function Map({ logout }) {
	const [points, setPoints] = React.useState(() => {
		const str = localStorage.getItem('points')
		if (!!str) {
			return JSON.parse(str)
		} else {
			localStorage.setItem('points', JSON.stringify(initialPoints))
			return initialPoints
		}
	})

	const handlePointClick = (e) => {
		e.preventDefault()
		// TODO open modal with points data
	}

	const handleLogOut = (e) => {
		e.preventDefault()
		logout()
	}
	//	bg-center bg-no-repeat bg-[url('../../../public/tutzing.svg')]
	return (

		<div className="container relative h-screen mx-auto ">
			<menu className="flex justify-between w-full mt-3 border-b-2 border-gray-400 ">
				<div>
					<button>Add point</button>
				</div>
				<button
					onClick={handleLogOut}
				>
					Log out
				</button>
			</menu>
			<div className='relative w-[1000px] h-[1000px] flex justify-center'>
				<img
					style={{}}
					className='w-full h-full' src='../../../public/tutzing.svg' />

				{points.map(point => {
					return <div
						style={{ left: `${point.x}%`, top: `${point.y}%` }}
						className='absolute w-4 h-4'
						onClick={handlePointClick}
					>
						<MapPinIcon />
					</div>
				})}

			</div>
		</div>

	)
}
