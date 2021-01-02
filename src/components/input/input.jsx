import './input.css';
import { forwardRef } from 'react';

const Input = (props, ref) => {
  const { id, type, text, name } = props;
  return (
    <div className="input-field">
      <input id={id} type={type} name={name} className="validate" ref={ref} />
      <label htmlFor={id}>{text}</label>
    </div>
  );
};

export default forwardRef(Input);
