import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRoutes from "./routes";
import Logo from "./components/Logo";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <section className="app" style={{ height: "100vh" }}>
        <Logo />
        <AppRoutes />
      </section>
    </BrowserRouter>
  );
}

export default App;
