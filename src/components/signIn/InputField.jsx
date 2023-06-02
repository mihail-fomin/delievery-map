import { Field } from 'formik';


export default function InputField(
	{
		label,
		type,
		name,
		value,
		errors,
		touched,
		handleChange,
		handleBlur,
	}) {

	return (
		<>
			<label>
				{label}
				<Field
					type={type}
					name={name}
					onChange={handleChange}
					onBlur={handleBlur}
					value={value}
				/>
			</label>
			{
				errors && touched &&
				<div className='error'>{errors}</div>
			}
		</>
	)
}