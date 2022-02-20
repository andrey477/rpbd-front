import React from 'react';
import {Modal} from "../../../components/Modal";
import {DialogActions, DialogContent, DialogContentText, TextField} from "@material-ui/core";
import {Button} from "../../../components/Button";
import {createCompetition} from "../../../api/competitions";
import {useFormik} from "formik";
import {Competition} from "../../../types/competition";
import {Form} from "../../../components/Form";
import './style.scss';
import {Input} from "../../../components/Input";

interface Props {
  title: string;
	open: boolean;
	handleClose: () => void;
}

export const ModalCompetition: React.FC<Props> = ({
	title,
	open,
	handleClose
}) => {
	const { handleSubmit, values, handleChange } = useFormik<Competition.Request>({
		initialValues: {
			name: '',
			attempts: 2,
		},
		onSubmit: async (values) => {
			console.log(values)
			await createCompetition(values);
		}
	});

  return (
    <Modal title={title} open={open} handleClose={handleClose}>
			<Form handleSubmit={handleSubmit}>
				<DialogContent>
					<DialogContentText>
						Заполните поля для создание соревнования.
					</DialogContentText>
					<Input
						id="name"
						name={'name'}
						label={'Название соревнования'}
						autoFocus
						margin="dense"
						value={values.name}
						onChange={handleChange}
						type={'text'}
						fullWidth
					/>
					<Input
						id="attempts"
						name={'attempts'}
						label={'Количество попыток'}
						margin="dense"
						value={values.attempts}
						onChange={handleChange}
						type={'number'}
						fullWidth
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Отмена
					</Button>
					<Button type={'submit'} color="primary">
						Создать
					</Button>
				</DialogActions>
			</Form>
		</Modal>
  );
}