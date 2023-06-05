import { Dialog } from '@headlessui/react'
import InputField from './Inputfield';
import { useSelector, useDispatch } from 'react-redux'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { addPoint } from '../../store/pointSlice';
import {
	setNameValue,
	setAmountValue,
	setXValue,
	setYValue,
} from '../../store/modalSlice'

export default function NewPointModal({ isOpen, setIsOpen }) {
	const nameValue = useSelector(state => state.modal.nameValue)
	const amountValue = useSelector(state => state.modal.amountValue)
	const xValue = useSelector(state => state.modal.xValue)
	const yValue = useSelector(state => state.modal.yValue)

	const dispatch = useDispatch()

	const handleNameChange = (e) => {
		dispatch(setNameValue(e.target.value))
	}

	const handleAmountChange = (e) => {
		dispatch(setAmountValue(e.target.value))
	}

	const handleSetPoints = () => {
		dispatch(addPoint(
			{ name: nameValue, amount: amountValue, x: xValue, y: yValue }
		))
		setIsOpen(false)
	}

	return (
		<Dialog
			style={{ left: `${xValue}%`, top: `${yValue}%` }}
			className='absolute p-2 bg-white rounded'
			open={isOpen}
			onClose={() => setIsOpen(false)}
		>
			<Dialog.Panel>

				<div className='flex justify-end'>
					<button
						className='w-6 h-6 p-0'
						onClick={() => setIsOpen(false)}
					>
						<XMarkIcon />
					</button>
				</div>

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
			</Dialog.Panel>
		</Dialog>
	)
}