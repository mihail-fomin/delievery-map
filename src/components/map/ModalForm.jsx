import { Dialog } from '@headlessui/react'
import InputField from './Inputfield';

export default function ModalForm({
	xValue,
	yValue,
	isOpen,
	setIsOpen,
	nameValue,
	setNameValue,
	amountValue,
	setAmountValue,
	handleXValueChange,
	handleYValueChange,
	handleSetPoints
}) {

	const handleNameChange = (e) => {
		setNameValue(e.target.value)
	}

	const handleAmountChange = (e) => {
		setAmountValue(e.target.value)
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
						value={xValue}
						onChange={handleXValueChange}
					/>
					<InputField
						label={'y'}
						placeholder={yValue}
						value={yValue}
						onChange={handleYValueChange}
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