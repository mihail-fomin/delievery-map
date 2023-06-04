import * as React from 'react'
import Point from './Point';
import ModalForm from './ModalForm';
import { useSelector, useDispatch } from 'react-redux'
import { loadFromLocalStorage, undoChanges, setXValue, setYValue } from '../../store/pointSlice';


export default function Map({ logout }) {
	const [isOpen, setIsOpen] = React.useState(false)
	const [clickOnMap, setClickOnMap] = React.useState(false)
	const [hoveredIndex, setHoveredIndex] = React.useState(null);

	const points = useSelector(state => state.points.pointsList)
	const dispatch = useDispatch()

	React.useEffect(() => {
		dispatch(loadFromLocalStorage())
	}, [points.length])

	const handleAddClick = () => {
		setClickOnMap(true)
	}

	const handleUndoChanges = () => {
		dispatch(undoChanges())
		dispatch(loadFromLocalStorage())
	}

	const handleIconMouseOver = (index) => {
		setHoveredIndex(index);
	}

	const handleIconMouseOut = () => {
		setHoveredIndex(null);
	}

	const handleMapClick = (e) => {

		if (clickOnMap) {
			setIsOpen(true)
			dispatch(setXValue(e.nativeEvent.offsetX / 10))
			dispatch(setYValue(e.nativeEvent.offsetY / 10))
			setClickOnMap(false)
		}
	}

	const handleLogOut = (e) => {
		e.preventDefault()
		logout()
	}


	return (

		<div className="container relative h-screen mx-auto">
			<menu className="flex justify-between w-full my-3">
				<div className='flex items-center gap-2'>
					{clickOnMap ?
						<button className='cursor-not-allowed animate-pulse' onClick={handleAddClick}>
							<p>Click on the map</p>
						</button>
						:
						<button onClick={handleAddClick}>
							<p>Add point</p>
						</button>
					}
				</div>
				<p className='my-auto'>
					<strong>{points.length}</strong> points left to deliever
				</p>
				<button onClick={handleUndoChanges}>
					Undo Changes
				</button>
				<button onClick={handleLogOut}>
					Log out
				</button>
			</menu>
			<div className='relative w-[1000px] h-[1000px] mx-auto'>
				<img
					onClick={handleMapClick}
					className='w-auto h-full ' src='../../../public/tutzing.svg' />
				<ModalForm
					isOpen={isOpen}
					setIsOpen={setIsOpen}
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
