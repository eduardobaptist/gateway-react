import "./modal.css";

const Modal = ({ show, title, children, onClose, style }) => {
  return show ? (
    <div className="modal">
      <div className="modal-content" style={style}>
        <div className="modal-header">
          <h4 className="modal-title">{title}</h4>
          <button
            onClick={onClose}
            type="button"
            class="btn-close"
            aria-label="Fechar"
          ></button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  ) : null;
};

export default Modal;
