import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRoutes from "./routes";
import store from "./store";

import Logo from "./components/Logo";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ToastContainer />
        <section className="app" style={{ height: "100vh" }}>
          <Logo />
          <AppRoutes />
        </section>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
