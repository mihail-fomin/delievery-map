import * as React from 'react'
import { MapPinIcon, TrashIcon } from '@heroicons/react/24/solid'
import InputField from './Inputfield';
import { useDispatch, useSelector } from 'react-redux'
import { addPoint, loadFromLocalStorage, removePoint } from '../../store/pointSlice';
import Modal from './Modal'

export default function Point({
	point,
	desc,
	index,
	isLabelActive,
	onMouseOver,
	onMouseOut,
}) {
	const [isOpen, setIsOpen] = React.useState(false)


	const [nameValue, setNameValue] = React.useState('')
	const [amountValue, setAmountValue] = React.useState('')


	const dispatch = useDispatch()

	const handleNameChange = (e) => {
		setNameValue(e.target.value)
	}

	const handleAmountChange = (e) => {
		setAmountValue(e.target.value)
	}


	const handleRemovePoint = (point) => {
		dispatch(removePoint(point))
		setIsOpen(false)
	}

	const handleSaveChanges = () => {
		dispatch(addPoint(
			{ name: nameValue, amount: amountValue, x: point.x, y: point.y }
		))
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
			{isLabelActive &&
				<div
					style={{ left: `${point.x}%`, top: `${point.y}% - 100%` }}
					className='absolute w-24 text-sm text-center text-gray-900 bg-white rounded'>
					{desc}
				</div>
			}
			<Modal
				xValue={point.x}
				yValue={point.y}
				isOpen={isOpen}
				setIsOpen={setIsOpen}
			>
				<form>
					<InputField
						label='name'
						value={point.name}
						newValue={nameValue}
						setNewValue={setNameValue}
						onChange={handleNameChange}
					/>
					<InputField
						label='amount'
						value={point.amount}
						newValue={amountValue}
						setNewValue={setAmountValue}
						onChange={handleAmountChange}
					/>
					<InputField
						label='x'
						value={Number(point.x).toFixed(2)}
					/>
					<InputField
						label='y'
						value={Number(point.y).toFixed(2)}
					/>
				</form>
				<button onClick={() => handleRemovePoint(point.name)}>
					<TrashIcon className='w-6 h-6' />
				</button>
				<button onClick={handleSaveChanges}>
					Save Changes
				</button>
			</Modal>
		</div>
	)
}