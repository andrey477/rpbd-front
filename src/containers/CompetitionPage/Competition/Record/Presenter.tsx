import React from 'react';
import block from "bem-cn";
import {Typography} from "@material-ui/core";
import {Button} from "../../../../components/Button";
import {useFormik} from "formik";
import {Input} from "../../../../components/Input";
import {Form} from "../../../../components/Form";
import './style.scss';
import {Competition} from "../../../../types/competition";
import {Props} from "./index";
import {Status} from "../../../../constants/status";
import {createBody} from "./helper";
import {addRacer} from "../../../../api/competitions";

const bem = block('record');

export const Presenter: React.FC<Props> = ({
	title,
	competitionId,
	attempts,
	person,
	setCompetition,
	setValue
}) => {
	const { handleSubmit, values, handleChange } = useFormik({
		initialValues: {
			number: '',
			brand: '',
			horsepower: 0,
			model: '',
		},
		onSubmit: async (values) => {
			const body = createBody(values, competitionId, person, attempts);
			const response = await addRacer(body);
			if (response.length) {
				setCompetition(response);
				setValue(1);
			}
		}
	});

	return (
		<div className={bem()}>
			<Typography variant={'h4'} align={'center'}>{title}</Typography>
			<Form
				handleSubmit={handleSubmit}
				classes={bem('form')}
			>
				<Input
					id={'number'}
					name={'number'}
					type={'number'}
					label={'Номер участника'}
					value={values.number}
					onChange={handleChange}
					fullWidth
					autoFocus
				/>
				<Input
					id={'brand'}
					name={'brand'}
					type={'text'}
					label={'Марка автомобиля'}
					value={values.brand}
					onChange={handleChange}
				/>
				<Input
					id={'model'}
					name={'model'}
					type={'text'}
					label={'Модель автомобиля'}
					value={values.model}
					onChange={handleChange}
				/>
				<Input
					id={'horsepower'}
					name={'horsepower'}
					type={'number'}
					label={'Мощность автомобиля'}
					value={values.horsepower}
					onChange={handleChange}
				/>
				<div className={bem('buttons')}>
					<Button type='submit'>Принять участие</Button>
				</div>
			</Form>
		</div>
	);
}