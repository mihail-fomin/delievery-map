import { Dialog } from '@headlessui/react'
import InputField from './Inputfield';
import { useSelector, useDispatch } from 'react-redux'
import {
	addPoint,
	setNameValue,
	setAmountValue,
} from '../../store/pointSlice';


export default function ModalForm({
	isOpen,
	setIsOpen,
}) {

	const nameValue = useSelector(state => state.points.nameValue)
	const amountValue = useSelector(state => state.points.amountValue)
	const xValue = useSelector(state => state.points.xValue)
	const yValue = useSelector(state => state.points.yValue)

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

				<form>
					<InputField
						label={'name'}
						placeholder={'name'}
						value={nameValue}
						onChange={handleNameChange}
					/>
					<InputField
						label={'amount'}
						placeholder={'amount'}
						value={amountValue}
						onChange={handleAmountChange}
					/>
					<InputField
						label={'x'}
						placeholder={xValue}
					/>
					<InputField
						label={'y'}
						placeholder={yValue}
					/>
				</form>
				<div className='flex gap-2 mt-3'>
					<button onClick={handleSetPoints}>Set</button>
					<button onClick={() => setIsOpen(false)}>Cancel</button>
				</div>
			</Dialog.Panel>
		</Dialog>
	)
}