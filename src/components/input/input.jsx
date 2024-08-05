import "./input.css";

const Input = ({ label, type, placeHolder, icon, name, value, onChange }) => {
  return (
    <div className="form-group">
      {label && <label htmlFor={name}>{label}</label>}
        {icon && <span className="input-icon">{icon}</span>}
        <input
          type={type}
          placeholder={placeHolder}
          className="form-control"
          name={name}
          value={value}
          onChange={onChange}
        />
    </div>
  );
};

export default Input;
