

export default function InputField({ label, placeholder, value, onChange }) {

	return (
		<label>
			{label}
			<input
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		</label>
	)
}