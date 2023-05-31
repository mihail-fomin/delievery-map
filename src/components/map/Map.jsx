import * as React from 'react'
import initialPoints from '../../../public/model'
import { MapPinIcon } from '@heroicons/react/24/solid'
import Icon from './Icon';

export default function Map({ logout }) {
	const [activeIndex, setActiveIndex] = React.useState(null);
	const [points, setPoints] = React.useState(() => {
		const str = localStorage.getItem('points')
		if (!!str) {
			return JSON.parse(str)
		} else {
			localStorage.setItem('points', JSON.stringify(initialPoints))
			return initialPoints
		}
	})

	function handleIconMouseOver(index) {
		setActiveIndex(index);
	}
	function handleIconMouseOut() {
		setActiveIndex(null);
	}

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
				<button>Add point</button>
				<button onClick={handleLogOut}>
					Log out
				</button>
			</menu>
			<div className='relative w-[1000px] h-[1000px]'>
				<img className='w-full h-full' src='../../../public/tutzing.svg' />
				{points.map((point, index) => (
					<Icon
						key={index}
						point={point}
						desc={`${point.name}`}
						index={index}
						isActive={activeIndex === index}
						onMouseOver={handleIconMouseOver}
						onMouseOut={handleIconMouseOut}
					/>
				))}
			</div>
		</div>
	)
}
