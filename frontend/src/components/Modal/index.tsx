import React from "react";
import "./style.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <h2>Acesso Restrito</h2>
        <p>Você não tem permissão para acessar esta página.</p>
      </div>
    </div>
  );
};

export default Modal;
