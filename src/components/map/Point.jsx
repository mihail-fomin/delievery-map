import * as React from 'react'
import { MapPinIcon } from '@heroicons/react/24/solid'
import { Dialog } from '@headlessui/react'
import InputField from './Inputfield';


export default function Point({
	point,
	desc,
	index,
	isActive,
	nameValue,
	setNameValue,
	amountValue,
	setAmountValue,
	xValue,
	setXValue,
	yValue,
	setYValue,
	onMouseOver,
	onMouseOut,
	points,
	setPoints,
	remove
}) {
	const [isOpen, setIsOpen] = React.useState(false)


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

	// const setChanges = (name) => {
	// 	const updatedPoints = points.map(p => {
	// 		if (p.name === name) {
	// 			return name
	// 		} else {
	// 			return p
	// 		}
	// 	})
	// 	setPoints(updatedPoints)
	// 	setIsOpen(false)
	// }

	return (
		<div
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
				style={{ left: `${point.x.toFixed(2)}%`, top: `${point.y.toFixed(2)}%` }}
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
					{/* <button onClick={remove(point.name)}>Remove point</button> */}
				</Dialog.Panel>
			</Dialog>
		</div>
	)
}