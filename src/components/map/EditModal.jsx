import * as React from 'react'
import { useDispatch } from 'react-redux'
import Modal from './Modal'
import InputField from './Inputfield';
import { addPoint, removePoint } from '../../store/pointSlice';
import { TrashIcon } from '@heroicons/react/24/solid'

export default function EditModal({
	isOpen,
	setIsOpen,
	point
}) {
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
		if (nameValue === '') {
			dispatch(addPoint(
				{ name: point.name, amount: amountValue, x: point.x, y: point.y }
			))
		} else if (amountValue === '') {
			dispatch(addPoint(
				{ name: nameValue, amount: point.amount, x: point.x, y: point.y }
			))
		} else {
			dispatch(addPoint(
				{ name: nameValue, amount: amountValue, x: point.x, y: point.y }
			))
		}
		setIsOpen(false)
	}

	return (
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
			<div className='flex justify-between gap-2 mt-3'>
				<button onClick={handleSaveChanges}>
					Save
				</button>
				<button onClick={() => handleRemovePoint(point.name)}>
					<TrashIcon className='w-6 h-6' />
				</button>
			</div>
		</Modal>
	)
}