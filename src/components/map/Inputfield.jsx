

export default function InputField({ label, placeholder }) {

	return (
		<label>
			{label}
			<input
				placeholder={placeholder}
			/>
		</label>
	)
}