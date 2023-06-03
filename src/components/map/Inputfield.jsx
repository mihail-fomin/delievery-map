import * as React from 'react'

export default function InputField({ label, value, onChange }) {
	const [isEditing, setIsEditing] = React.useState(false)
	let fieldContent;
	if (isEditing) {
		fieldContent = (
			<div className='flex justify-between gap-2'>
				<input
					value={value}
					onChange={onChange}
				/>
				<button onClick={() => setIsEditing(false)}>Save</button>
			</div>
		)
	} else {
		fieldContent = (
			<div className='flex justify-between gap-2'>
				{value}
				<button onClick={() => setIsEditing(true)}>Edit</button>
			</div>
		)
	}

	return (
		<div className='w-[300px]'>
			<label>
				{label}
				{fieldContent}
			</label>
		</div>
	)
}