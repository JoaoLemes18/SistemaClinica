import React, { useState } from "react";
import "../styles/Modal.scss";
import Input from "./Input";

interface ModalProps {
  
}

const Modal: React.FC<ModalProps> = ({}) => {

  const [formData, setFormData] = useState({
    name: "",
    time: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  return (
    <div className="modal">
      <form action="">
        
      </form>
    </div>
  );
};

export default Modal;
