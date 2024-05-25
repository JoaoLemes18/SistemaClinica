import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";

const App: React.FC = () => {
  return (
    <section className="app" style={{ height: "100vh" }}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </section>
  );
};

export default App;
