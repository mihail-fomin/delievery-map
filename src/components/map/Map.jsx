import * as React from 'react'
import initialPoints from '../../../public/model'
import Point from './Point';
import ModalForm from './ModalForm';


export default function Map({ logout }) {
	const [isOpen, setIsOpen] = React.useState(false)
	const [clickOnMap, setClickOnMap] = React.useState(false)
	const [hoveredIndex, setHoveredIndex] = React.useState(null);

	const [nameValue, setNameValue] = React.useState('')
	const [amountValue, setAmountValue] = React.useState('')

	const [xValue, setXValue] = React.useState(0)
	const [yValue, setYValue] = React.useState(0)

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

	const handleXValueChange = (e) => {
		setXValue(e.target.value)
	}

	const handleYValueChange = (e) => {
		setYValue(e.target.value)
	}

	const handleSetPoints = (e) => {
		e.preventDefault()
		setPoints(
			points.concat([{ name: nameValue, amount: amountValue, x: xValue, y: yValue }])
		)
		localStorage.setItem('points', JSON.stringify(points))
		setIsOpen(false)
		console.log('nameValue: ', nameValue);

	}

	const handleLogOut = (e) => {
		e.preventDefault()
		logout()
	}

	return (

		<div className="container relative h-screen mx-auto">
			<menu className="flex justify-between w-full my-3">
				<div className='flex items-center gap-2'>
					<button onClick={handleAddClick}>
						Add point
					</button>
					{clickOnMap ? <p>Click on the map</p> : ''}
				</div>
				<button onClick={handleLogOut}>
					Log out
				</button>
			</menu>
			<div className='relative w-[1000px] h-[1000px] mx-auto'>
				<img
					onClick={handleMapClick}
					className='w-auto h-full ' src='../../../public/tutzing.svg' />
				<ModalForm
					xValue={xValue}
					yValue={yValue}
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					nameValue={nameValue}
					setNameValue={setNameValue}
					amountValue={amountValue}
					setAmountValue={setAmountValue}
					handleXValueChange={handleXValueChange}
					handleYValueChange={handleYValueChange}
					handleSetPoints={handleSetPoints}
				/>
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
