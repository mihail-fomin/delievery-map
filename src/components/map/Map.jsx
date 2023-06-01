import * as React from 'react'
import initialPoints from '../../../public/model'
import Point from './Point';
import { Dialog } from '@headlessui/react'

export default function Map({ logout }) {
	const [isOpen, setIsOpen] = React.useState(false)
	const [clickOnMap, setClickOnMap] = React.useState(false)
	const [hoveredIndex, setHoveredIndex] = React.useState(null);

	let [xValue, setXValue] = React.useState(0)
	let [yValue, setYValue] = React.useState(0)

	const [points, setPoints] = React.useState(() => {
		const str = localStorage.getItem('points')
		if (!!str) {
			return JSON.parse(str)
		} else {
			localStorage.setItem('points', JSON.stringify(initialPoints))
			return initialPoints
		}
	})

	const handleAddClick = (e) => {
		e.preventDefault()
		setClickOnMap(true)
	}

	const handleIconMouseOver = (index) => {
		setHoveredIndex(index);
	}

	const handleIconMouseOut = () => {
		setHoveredIndex(null);
	}

	const handleMapClick = (e) => {
		e.preventDefault()

		if (clickOnMap) {
			setIsOpen(true)
			setXValue(e.nativeEvent.offsetX / 10);
			setYValue(e.nativeEvent.offsetY / 10);
			setClickOnMap(false)
		}
	}


	const handleLogOut = (e) => {
		e.preventDefault()
		logout()
	}

	return (

		<div className="container relative h-screen mx-auto">
			<menu className="flex justify-between w-full mt-3 border-b-2 border-gray-400">
				<button onClick={handleAddClick}>
					Add point
				</button>
				{setIsOpen ? <p>Click on the map</p> : ''}
				<button onClick={handleLogOut}>
					Log out
				</button>
			</menu>
			<div className='relative w-[1000px] h-[1000px] mx-auto'>
				<img
					onClick={handleMapClick}
					className='w-auto h-full ' src='../../../public/tutzing.svg' />
				<Dialog
					style={{ left: `${xValue}%`, top: `${yValue}%` }}
					className='absolute p-2 bg-white rounded'
					open={isOpen}
					onClose={() => setIsOpen(false)}
				>
					<Dialog.Panel>
						<form>
							<label>
								name
								<input placeholder='name' />
							</label>
							<label>
								amount
								<input placeholder='amount' />
							</label>
							<label>
								x
								<input placeholder={xValue} />
							</label>
							<label>
								y
								<input placeholder={yValue} />
							</label>
						</form>
						<button onClick={() => setIsOpen(false)}>Cancel</button>
					</Dialog.Panel>
				</Dialog>
				{points.map((point, index) => (
					<Point
						key={index}
						point={point}
						desc={`${point.name}`}
						index={index}
						isActive={hoveredIndex === index}
						onMouseOver={handleIconMouseOver}
						onMouseOut={handleIconMouseOut}
					/>
				))}
			</div>
		</div>
	)
}
