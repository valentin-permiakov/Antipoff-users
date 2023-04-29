import { resetState, updateState } from '@/store/signupSlice';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Input, { InputProps } from './Input/Input';
import styles from './login-form.module.scss';

type LoginFormProps = {};

const LoginForm: React.FC<LoginFormProps> = () => {
  const formState = useSelector((state: RootState) => state.signup);
  const dispatch = useDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const INPUTS: Array<InputProps> = [
    {
      id: 'name',
      labelText: 'Имя',
      placeholder: 'Артур',
      type: 'text',
      value: formState.name.value,
      error: formState.name.error,
    },
    {
      id: 'email',
      labelText: 'Электронная почта',
      placeholder: 'example@mail.ru',
      type: 'email',
      value: formState.email.value,
      error: formState.email.error,
    },
    {
      id: 'password',
      labelText: 'Пароль',
      placeholder: '*****',
      type: 'password',
      value: formState.password.value,
      error: formState.password.error,
      isPassword: true,
    },
    {
      id: 'confirmPassword',
      labelText: 'Пароль',
      placeholder: '*****',
      type: 'password',
      value: formState.confirmPassword.value,
      error: formState.confirmPassword.error,
      isPassword: true,
    },
  ];

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (loading) {
      return;
    }

    if (formState.name.value.trim().length <= 5) {
      dispatch(
        updateState({
          ...formState,
          name: {
            ...formState.name,
            error: 'Имя должно быть длиннее 5 символов',
          },
        })
      );
      return;
    }

    if (!regex.test(formState.email.value)) {
      dispatch(
        updateState({
          ...formState,
          email: {
            ...formState.email,
            error: 'Введите рабочий адрес email',
          },
        })
      );
      return;
    }

    if (formState.password.value.trim().length <= 8) {
      dispatch(
        updateState({
          ...formState,
          password: {
            ...formState.password,
            error: 'Пароль должен быть длиннее 5 символов',
          },
        })
      );
      return;
    }

    if (formState.password.value !== formState.confirmPassword.value) {
      dispatch(
        updateState({
          ...formState,
          confirmPassword: {
            ...formState.confirmPassword,
            error: 'Пароль и подтверждение пароля должны совпадать',
          },
        })
      );
      return;
    }

    try {
      setLoading(true);
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (response.status !== 200) {
        throw new Error('Что-то пошло не так');
      }

      const data = await response.json();

      sessionStorage.setItem('token', data.token);
      dispatch(resetState());

      router.push('/dashboard');
    } catch (error: any) {
      console.log(error.message);
      setError(error.message);
    }
    setLoading(false);
  };

  return (
    <form
      className={styles.loginForm}
      onSubmit={handleSubmit}
    >
      <h2 className={styles.formHeader}>Регистрация</h2>
      {INPUTS.map((input, index) => (
        <Input
          id={input.id}
          labelText={input.labelText}
          placeholder={input.placeholder}
          type={input.type}
          value={input.value}
          error={input.error}
          isPassword={input.isPassword}
          key={index}
        />
      ))}

      <button
        type='submit'
        className={styles.submitBtn}
      >
        Зарегистрироваться
      </button>
      {error && <span>{error}</span>}
    </form>
  );
};
export default LoginForm;
