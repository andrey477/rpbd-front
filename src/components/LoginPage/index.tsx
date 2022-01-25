import React from "react";
import {Form} from "../Form";
import {useFormik} from "formik";
import {Input} from "../Input";
import {Button} from "../Button";
import {Card} from "../Card";
import block from "bem-cn";
import {store} from "../../store/store";
import {loginUser} from "../../store/user/actions";
import {history} from "../../history";
import './style.scss';

interface Props {

}

const bem = block('login-page');

export const LoginPage: React.FC<Props> = () => {
  const { handleSubmit, values, handleChange } = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async (values) => {
      const response = await store.dispatch(loginUser(values));
      if (response.payload) {
        history.push('/main');
      }
    }
  });

  return (
    <Card title={'Авторизуйтесь в системе'} classes={bem('card')}>
      <Form handleSubmit={handleSubmit}>
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
        <Button
          type={'submit'}
          name={'submit-btn'}
        >
          Войти<i className="material-icons right">send</i>
        </Button>
      </Form>
    </Card>

  )
}