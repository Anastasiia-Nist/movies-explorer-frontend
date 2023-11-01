import './Input.css';
import { useLocation } from 'react-router-dom';
import { ENDPOINT_PROFILE } from '../../utils/constants';

function Input({
  label,
  id,
  name,
  type,
  minLength,
  maxLength,
  value,
  placeholder,
  pattern,
  onChange,
  errors,
  isValid,
  isEdit,
}) {
  const { pathname } = useLocation();

  return (
    <div className={pathname === ENDPOINT_PROFILE ? 'input' : 'input-auth'}>
      <label
        className={
          pathname === ENDPOINT_PROFILE ? 'input__label' : 'input-auth__label'
        }
      >
        {label}
      </label>
      <input
        className={pathname === ENDPOINT_PROFILE ? 'input__item' : 'input-auth__item'}
        id={id}
        name={name}
        type={type}
        minLength={minLength}
        maxLength={maxLength}
        placeholder={placeholder}
        required
        pattern={pattern ?? null}
        title={`Введите корректное значение поля: ${name}`}
        onChange={onChange}
        value={value || ''}
        disabled={!isEdit && true}
        autoComplete="off"
      />
      {!isValid && (
        <span
          className={
            pathname === ENDPOINT_PROFILE
              ? 'input-error input-error_active'
              : ' input-auth-error input-auth-error_active'
          }
          id={id}
        >
          {errors}
        </span>
      )}
    </div>
  );
}

export default Input;
