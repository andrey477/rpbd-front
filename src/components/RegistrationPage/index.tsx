import React from 'react';
import block from "bem-cn";
import {Input} from "../Input";
import {Form} from "../Form";
import {useFormik} from "formik";
import {history} from "../../history";
import {Auth} from "../../types/auth";
import {Logo} from "../ Logo";
import './style.scss';
import {Button} from "../Button";
import {Link} from "react-router-dom";
import {createBody} from "./helper";
import {registration} from "../../api/auth";

interface Props {

}

const bem = block('registration');

export const RegistrationPage: React.FC<Props> = () => {
	const { handleSubmit, values, handleChange } = useFormik<Auth.Registration.Form>({
		initialValues: {
			username: '',
			password: '',
			age: '',
			city: '',
			name: '',
			email: '',
			surname: ''
		},
		onSubmit: async (values) => {
			console.log(createBody(values));
			const response = await registration(createBody(values));
			if (response) {
				history.push('/login');
			}
		}
	});

  return (
    <div className={bem()}>
			<div className={bem('auth-form')}>
				<Logo
					width={200}
					height={200}
					classes={bem('logo')}
				/>
				<Form
					handleSubmit={handleSubmit}
					classes={bem('form')}
				>
					<Input
						id={'username'}
						name={'username'}
						type={'text'}
						label={'Username'}
						value={values.username}
						onChange={handleChange}
					/>
					<Input
						id={'password'}
						name={'password'}
						type={'password'}
						label={'Password'}
						value={values.password}
						onChange={handleChange}
					/>
					<Input
						id={'age'}
						name={'age'}
						type={'text'}
						label={'age'}
						value={values.age}
						onChange={handleChange}
					/>
					<Input
						id={'city'}
						name={'city'}
						type={'text'}
						label={'city'}
						value={values.city}
						onChange={handleChange}
					/>
					<Input
						id={'name'}
						name={'name'}
						type={'text'}
						label={'name'}
						value={values.name}
						onChange={handleChange}
					/>
					<Input
						id={'surname'}
						name={'surname'}
						type={'text'}
						label={'surname'}
						value={values.surname}
						onChange={handleChange}
					/>
					<Input
						id={'email'}
						name={'email'}
						type={'text'}
						label={'email'}
						value={values.email}
						onChange={handleChange}
					/>
					<div className={bem('btn-group')}>
						<Button
							type={'submit'}
							name={'submit-btn'}
						>
							Зарегестрироваться<i className={bem('icon').mix('material-icons right')}>send</i>
						</Button>
						<Button variant={'text'}>
							<Link
								className={bem('link')}
								to="/login"
							>Войти</Link>
						</Button>
					</div>
				</Form>
			</div>
		</div>
  );
}