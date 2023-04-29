import React, { useState } from 'react';
import styles from './input.module.scss';
import { IFormState, updateState } from '@/store/signupSlice';
import { useDispatch } from 'react-redux';
import { EIcons, Icon } from '@/components/icons/Icon';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

export type InputProps = {
  type: React.HTMLInputTypeAttribute;
  labelText: string;
  placeholder: string;
  id: keyof IFormState;
  value: string;
  isPassword?: boolean;
  error?: string;
};

const Input: React.FC<InputProps> = ({
  type,
  labelText,
  placeholder,
  id,
  value,
  error,
  isPassword,
}) => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.signup);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;

    dispatch(updateState({ ...state, [id]: { value } }));
  };
  return (
    <>
      <label
        htmlFor={id}
        className={styles.inputLabel}
      >
        {labelText}
        <input
          type={!showPassword ? type : 'text'}
          id={id}
          className={styles.input}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          required
        />
        {isPassword && (
          <button
            className={styles.showPwdBtn}
            onClick={(e) => {
              e.preventDefault();
              setShowPassword(!showPassword);
            }}
          >
            <Icon
              name={!showPassword ? EIcons.eyeOff : EIcons.eyeOn}
              width={24}
              height={24}
            />
          </button>
        )}
        {error && <span className={styles.errorMessage}>{error}</span>}
      </label>
    </>
  );
};
export default Input;
