import React from "react";
import {Link} from 'react-router-dom';
import {Form} from "../Form";
import {useFormik} from "formik";
import {Input} from "../Input";
import {Button} from "../Button";
import block from "bem-cn";
import {store} from "../../store/store";
import {loginUser} from "../../store/user/actions";
import {history} from "../../history";
import {Logo} from "../ Logo";
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
        history.push('/competition');
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
          <div className={bem('btn-group')}>
            <Button
              type={'submit'}
              name={'submit-btn'}
            >
              Войти<i className={bem('icon').mix('material-icons right')}>send</i>
            </Button>
            <Button variant={'text'}>
              <Link
                className={bem('link')}
                to="/registration"
              >Регистрация</Link>
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}