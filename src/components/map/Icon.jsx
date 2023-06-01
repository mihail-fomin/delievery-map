import { MapPinIcon } from '@heroicons/react/24/solid'


export default function Icon({ point, desc, index, isActive, onMouseOver, onMouseOut }) {

	return (
		<div
			key={point.name}
			style={{ left: `${point.x}%`, top: `${point.y}%` }}
			className='absolute w-6 h-6 text-red-700 transition-all duration-100 -translate-y-full cursor-pointer hover:text-red-600 hover:scale-125'
			// onClick={handlePointClick}
			index={index}
			onMouseOver={() => onMouseOver(index)}
			onMouseOut={() => onMouseOut()}
		>
			<MapPinIcon />
			{isActive &&
				<div className='w-24 text-sm text-center text-gray-900 bg-white rounded'>{desc}</div>
			}
		</div>
	)
}