import { InputProps } from './components/LoginForm/Input/Input';
import { store } from './store/store';

export const INPUTS: Array<InputProps> = [
  {
    id: 'name',
    labelText: 'Имя',
    placeholder: 'Артур',
    type: 'text',
    value: store.getState().signup.name.value,
    error: store.getState().signup.name.error,
  },
  {
    id: 'email',
    labelText: 'Электронная почта',
    placeholder: 'example@mail.ru',
    type: 'email',
    value: store.getState().signup.email.value,
    error: store.getState().signup.email.error,
  },
  {
    id: 'password',
    labelText: 'Пароль',
    placeholder: '*****',
    type: 'password',
    value: store.getState().signup.password.value,
    error: store.getState().signup.password.error,
    isPassword: true,
  },
  {
    id: 'password',
    labelText: 'Пароль',
    placeholder: '*****',
    type: 'password',
    value: store.getState().signup.confirmPassword.value,
    error: store.getState().signup.confirmPassword.error,
    isPassword: true,
  },
];
