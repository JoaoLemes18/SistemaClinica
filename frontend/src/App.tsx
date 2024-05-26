import { BrowserRouter } from "react-router-dom";
import { ModalProvider } from "./context/MsgContext";

import AppRoutes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <ModalProvider>
        <section className="app" style={{ height: "100vh" }}>
          <AppRoutes />
        </section>
      </ModalProvider>
    </BrowserRouter>
  );
}

export default App;
