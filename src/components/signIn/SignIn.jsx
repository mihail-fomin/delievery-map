import * as React from 'react'
import { Formik, Form } from 'formik';
import { validateSignIn } from './validateSginIn'
import InputField from './InputField';

export default function SignIn({ signIn }) {
	const [wrongLogin, setWrongLogin] = React.useState(false)


	return (
		<div className='flex flex-col items-center justify-center h-screen'>
			<h1 className='font-bold'>Welcome to the Delivery service!</h1>
			<Formik
				initialValues={{ login: '', password: '' }}
				validate={validateSignIn}
				onSubmit={
					(values) => {
						// если введены верные логин/пароль
						if (values.login === 'test' && values.password === 'test') {
							// делаем переход на рабочую страницу
							signIn()
						} else {
							// иначе - возвращаем подсказку
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
					<Form
						className='mt-6'
						onSubmit={handleSubmit}
					>
						<InputField
							label='Login'
							type='text'
							name='login'
							value={values.login}
							errors={errors.login}
							touched={touched.login}
							handleChange={handleChange}
							handleBlur={handleBlur}
						/>
						<InputField
							label='Password'
							type='password'
							name='password'
							value={values.password}
							errors={errors.password}
							touched={touched.password}
							handleChange={handleChange}
							handleBlur={handleBlur}
						/>
						{/* Оповещаем о неправильно введенном логине/пароле */}
						{wrongLogin ? <p className='error'>Oops! try "test"-"test" </p> : ''}
						<button className='mt-3' type="submit" disabled={Object.keys(errors).length}>
							Sign In
						</button>
					</Form>
				)}
			</Formik>
		</div>
	)
}