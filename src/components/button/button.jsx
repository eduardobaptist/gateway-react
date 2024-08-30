import "./button.css";

const Button = ({
  text,
  height,
  backgroundColor,
  width,
  bootstrapCls,
  onClick
}) => {
  return (
    <button
      type="button"
      style={{
        height: height,
        width: width,
        backgroundColor: backgroundColor
      }}
      className={bootstrapCls}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
