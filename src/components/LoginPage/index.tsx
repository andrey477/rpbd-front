import React from "react";
import {Form} from "../Form";
import {useFormik} from "formik";
import {Input} from "../Input";
import {Button} from "../Button";
import {Card} from "../Card";
import block from "bem-cn";
import './style.scss';

interface Props {

}

const bem = block('login-page');

export const LoginPage: React.FC<Props> = () => {
  const { handleSubmit, values, handleChange } = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    onSubmit: values => {
      console.log(values)
    }
  });

  return (
    <Card title={'Авторизуйтесь в системе'} classes={bem('card')}>
      <Form handleSubmit={handleSubmit}>
        <Input
          id={'login'}
          name={'login'}
          type={'text'}
          label={'Login'}
          value={values.login}
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
          Submit<i className="material-icons right">send</i>
        </Button>
      </Form>
    </Card>

  )
}