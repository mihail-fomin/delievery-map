import * as React from 'react'
import { MapPinIcon } from '@heroicons/react/24/solid'
import EditModal from './EditModal'


export default function Point({
	point,
	desc,
	index,
	isLabelActive,
	onMouseOver,
	onMouseOut,
}) {
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
			{isLabelActive &&
				<div
					style={{ left: `${point.x}%`, top: `${point.y}% - 100%` }}
					className='absolute w-24 text-sm text-center text-gray-900 bg-white rounded'>
					{desc}
				</div>
			}
			<EditModal
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				point={point}
			/>
		</div>
	)
}