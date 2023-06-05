import * as React from 'react'
import { PencilSquareIcon } from '@heroicons/react/24/solid'


export default function InputField({ label, value, newValue, onChange }) {
	const [isEditing, setIsEditing] = React.useState(false)

	const handleEditClick = (e) => {
		e.preventDefault()
		e.stopPropagation()
		setIsEditing(true)
	}


	let readFieldContent = (
		<div className='flex items-center justify-between gap-2'>
			<p className='font-bold'>{value}</p>
			{onChange &&
				<button className='py-0' onClick={handleEditClick}>
					<PencilSquareIcon className='w-6 h-6' />
				</button>
			}
		</div>
	)

	let writeFieldContent = (
		<div className='flex justify-between gap-2 text-gray-500'>
			<input
				value={newValue}
				placeholder={value}
				onChange={onChange}
			/>
		</div>
	);

	let content = () => {
		if (isEditing) {
			return writeFieldContent
		} else {
			return readFieldContent
		}
	}


	return (
		<div className='w-[300px]'>
			<label>
				<p className='text-sm'>{label}</p>
				{content()}
			</label>
		</div>
	)
}