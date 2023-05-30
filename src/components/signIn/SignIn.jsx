import * as React from 'react'
import { Formik, Form, Field } from 'formik';
import { validateSignIn } from './validateSginIn'

export default function SignIn({ setScreenType }) {
	const [wrongLogin, setWrongLogin] = React.useState(false)



	return (
		<>
			<h1>Welcome to the Delievery service!</h1>
			<Formik
				initialValues={{ login: '', password: '' }}
				validate={validateSignIn}
				onSubmit={(values) => {
					if (values.login === 'test' && values.password === 'test') {
						setScreenType('map')
					} else {
						setWrongLogin(true)
					}
				}
				}
			>
				{({
					errors,
					values,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
				}) => (
					<Form onSubmit={handleSubmit}>
						<label>
							login
							<Field
								type="text"
								name="login"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.login}
							/>
						</label>
						{errors.login && touched.login &&
							<div className='error'>{errors.login}</div>
						}
						<label>
							password
							<Field
								type="password"
								name="password"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.password}
							/>
						</label>
						{errors.password && touched.password &&
							<div className='error'>{errors.password}</div>}
						{/* Оповещаем о неправильно введенном логине/пароле */}
						{wrongLogin ? <p className='error'>Oops! try "test"-"test" </p> : ''}

						<button className='mt-3' type="submit" disabled={Object.keys(errors).length}>
							Sign In
						</button>
					</Form>
				)}
			</Formik>
		</>
	)
}