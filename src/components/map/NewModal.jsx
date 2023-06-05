import * as React from 'react'
import InputField from './Inputfield';
import { useDispatch } from 'react-redux'
import { addPoint } from '../../store/pointSlice';
import Modal from './Modal'

export default function NewPointModal({
	isOpen,
	setIsOpen,
	xValue,
	yValue,
}) {
	const dispatch = useDispatch()

	const [nameValue, setNameValue] = React.useState('')
	const [amountValue, setAmountValue] = React.useState('')


	const handleNameChange = (e) => {
		setNameValue(e.target.value)
	}

	const handleAmountChange = (e) => {
		setAmountValue(e.target.value)
	}

	const handleSetPoints = () => {
		dispatch(addPoint(
			{ name: nameValue, amount: amountValue, x: xValue, y: yValue }
		))
		setNameValue('')
		setAmountValue('')
		setIsOpen(false)
	}

	return (
		<Modal
			xValue={xValue}
			yValue={yValue}
			isOpen={isOpen}
			setIsOpen={setIsOpen}
		>
			<form>
				<InputField
					label={'name'}
					value={nameValue}
					onChange={handleNameChange}
				/>
				<InputField
					label={'amount'}
					value={amountValue}
					onChange={handleAmountChange}
				/>
				<InputField
					label={'x'}
					value={xValue}
				/>
				<InputField
					label={'y'}
					value={yValue}
				/>
			</form>
			<div className='flex gap-2 mt-3'>
				<button onClick={handleSetPoints}>Set</button>
			</div>
		</Modal>


	)
}