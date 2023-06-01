import * as React from 'react'
import { MapPinIcon } from '@heroicons/react/24/solid'
import { Dialog } from '@headlessui/react'


export default function Point({ point, desc, index, isActive, onMouseOver, onMouseOut, handlePointClick }) {
	const [isOpen, setIsOpen] = React.useState(false)

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
						<label>
							{point.name}
							<input placeholder={point.name} />
						</label>
						<label>
							{point.amount}
							<input placeholder={point.amount} />
						</label>
						<label>
							{point.x}
							<input placeholder={point.x} />
						</label>
						<label>
							{point.y}
							<input placeholder={point.y} />
						</label>
					</form>
					<button onClick={() => setIsOpen(false)}>Cancel</button>
					<button onClick={() => setIsOpen(false)}>Remove point</button>
				</Dialog.Panel>
			</Dialog>
		</div>
	)
}