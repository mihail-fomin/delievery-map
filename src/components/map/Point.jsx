import * as React from 'react'
import { MapPinIcon } from '@heroicons/react/24/solid'
import { Dialog } from '@headlessui/react'
import InputField from './Inputfield';
import { useDispatch, useSelector } from 'react-redux'
import {
	loadFromLocalStorage,
	removePoint,
	setNameValue,
	setAmountValue,
	setXValue,
	setYValue
} from '../../store/pointSlice';


export default function Point({
	point,
	desc,
	index,
	isActive,
	onMouseOver,
	onMouseOut,
}) {
	const [isOpen, setIsOpen] = React.useState(false)

	const nameValue = useSelector(state => state.points.nameValue)
	const amountValue = useSelector(state => state.points.amountValue)
	const xValue = useSelector(state => state.points.xValue)
	const yValue = useSelector(state => state.points.yValue)

	const dispatch = useDispatch()

	const handleNameChange = (e) => {
		setNameValue(e.target.value)
	}

	const handleAmountChange = (e) => {
		setAmountValue(e.target.value)
	}

	const handleXValueChange = (e) => {
		setXValue(e.target.value)
	}

	const handleYValueChange = (e) => {
		setYValue(e.target.value)
	}

	const handleRemovePoint = (name) => {
		console.log('name: ', name);
		dispatch(removePoint(name))
		setIsOpen(false)
	}


	return (
		<div
			key={point.name}
			style={{ left: `${point.x}%`, top: `${point.y}%` }}
			className='absolute w-6 h-6 text-red-700 transition-all duration-100 -translate-y-full cursor-pointer hover:text-red-600 hover:scale-125'
			onClick={() => setIsOpen(true)}
			index={index}
			onMouseOver={() => onMouseOver(index)}
			onMouseOut={() => onMouseOut()}
		>
			<MapPinIcon />
			{isActive &&
				<div
					style={{ left: `${point.x}%`, top: `${point.y}% - 100%` }}
					className='absolute w-24 text-sm text-center text-gray-900 bg-white rounded'>
					{desc}
				</div>
			}
			<Dialog
				style={{ left: `${point.x}%`, top: `${point.y}%` }}
				className='absolute p-2 bg-white rounded'
				open={isOpen}
				onClose={() => setIsOpen(false)}
			>
				<Dialog.Panel>
					<form>
						<InputField
							label='name'
							placeholder={point.name}
							value={nameValue}
							onChange={handleNameChange}
						/>
						<InputField
							label='amount'
							placeholder={point.amount}
							value={amountValue}
							onChange={handleAmountChange}
						/>
						<InputField
							label='x'
							placeholder={point.x.toFixed(2)}
							value={xValue}
							onChange={handleXValueChange}
						/>
						<InputField
							label='y'
							placeholder={point.y.toFixed(2)}
							value={yValue}
							onChange={handleYValueChange}
						/>
					</form>
					<button onClick={() => setIsOpen(false)}>Cancel</button>
					{/* <button onClick={setChanges(point.name)}>Save changes</button> */}
					<button onClick={() => handleRemovePoint(point.name)}>Remove point</button>
				</Dialog.Panel>
			</Dialog>
		</div>
	)
}