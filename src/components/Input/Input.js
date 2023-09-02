import './Input.css';
import { useLocation } from 'react-router-dom';

function Input({
  label,
  id,
  name,
  type,
  minLength,
  maxLength,
  value,
  placeholder,
  onChange,
  errors,
  isValid,
  isEdit,
}) {
  const { pathname } = useLocation();

  return (
    <div className={pathname === '/profile' ? 'input' : 'input-auth'}>
      <label
        className={
          pathname === '/profile' ? 'input__label' : 'input-auth__label'
        }
      >
        {label}
      </label>
      <input
        className={pathname === '/profile' ? 'input__item' : 'input-auth__item'}
        id={id}
        name={name}
        type={type}
        minLength={minLength}
        maxLength={maxLength}
        placeholder={placeholder}
        required
        onChange={onChange}
        value={value || ''}
        disabled={!isEdit && true}
        autoComplete="off"
      />
      {!isValid && (
        <span
          className={
            pathname === '/profile'
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
