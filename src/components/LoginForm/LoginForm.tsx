import { INPUTS } from '@/globalConst';
import { resetState, updateState } from '@/store/signupSlice';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Input from './Input/Input';
import styles from './login-form.module.scss';

const LoginForm: React.FC = () => {
  const formState = useSelector((state: RootState) => state.signup);
  const dispatch = useDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

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
            error: 'Пароль должен быть длиннее 8 символов',
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
          value={formState[input.id].value}
          error={formState[input.id].error}
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
      {loading && <span>Регистрация...</span>}
      {error && <span>{error}</span>}
    </form>
  );
};
export default LoginForm;
