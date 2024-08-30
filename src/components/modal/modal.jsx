import "./modal.css";

const Modal = ({ show, title, children, onClose, style }) => {
  return show ? (
    <div className="modal" onClick={onClose}>
      <div
        className="modal-content"
        style={style}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h4 className="modal-title">{title}</h4>
          <button
            onClick={onClose}
            type="button"
            className="btn-close"
            aria-label="Fechar"
          ></button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  ) : null;
};

export default Modal;
