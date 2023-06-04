import * as React from 'react'

export default function InputField({ label, value, onChange, isNewPoint }) {

	const [isEditing, setIsEditing] = React.useState(false)
	let readFieldContent = (
		<div className='flex items-center justify-between gap-2'>
			{value}
			{onChange &&
				<button onClick={() => setIsEditing(true)}>Edit</button>
			}
		</div>
	)

	let writeFieldContent = (
		<div className='flex justify-between gap-2 text-gray-500'>
			<input
				value={value}
				onChange={onChange}
			/>
			<button onClick={() => setIsEditing(false)}>Save</button>
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
			<label >
				{label}
				{content()}
			</label>
		</div>
	)
}