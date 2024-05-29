import { BrowserRouter } from "react-router-dom";
import { ModalProvider } from "./context/MsgContext";
import AppRoutes from "./routes";
import Logo from "./components/Logo";

function App() {
  return (
    <BrowserRouter>
      <ModalProvider>
        <section className="app" style={{ height: "100vh" }}>
          <Logo />
          <AppRoutes />
        </section>
      </ModalProvider>
    </BrowserRouter>
  );
}

export default App;
