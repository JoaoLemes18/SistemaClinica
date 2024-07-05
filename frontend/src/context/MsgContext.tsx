import React, { createContext, useContext, useState } from "react";

interface MsgContextProps {
  message: string;
  setMessage: (msg: string) => void;
}

const ModalMsgContext = createContext<MsgContextProps | undefined>(undefined);

export const ModalProvider: React.FC = ({ children }) => {
  const [message, setMessage] = useState<string>("");

  const handleModal = () => {
    // Implementação da lógica para mostrar ou ocultar o modal
  };

  return (
    <ModalMsgContext.Provider value={{ message, setMessage, handleModal }}>
      {children}
    </ModalMsgContext.Provider>
  );
};

export const useModalMsgContext = () => {
  const context = useContext(ModalMsgContext);
  if (!context) {
    throw new Error("useModalMsgContext must be used within a ModalProvider");
  }
  return context;
};

export default ModalMsgContext;
