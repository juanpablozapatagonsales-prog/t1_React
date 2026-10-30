import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./features/landing/components/Footer";
import { Header } from "./features/landing/components/Header";
import { Main } from "./features/landing/components/main";
import { Api } from "./features/landing/components/api";

const Login = lazy(() =>
  import("./features/auth/components/Login").then((m) => ({
    default: m.Login,
  })),
);
const Register = lazy(() =>
  import("./features/auth/components/Register").then((m) => ({
    default: m.Register,
  })),
);
const ForgotPassword = lazy(() =>
  import("./features/auth/components/ForgotPassword").then((m) => ({
    default: m.ForgotPassword,
  })),
);
const PropsDemo = lazy(() =>
  import("./features/landing/components/PropsDemo").then((m) => ({
    default: m.PropsDemo,
  })),
);

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex min-vh-100 flex-column">
        <Header />
        <Suspense fallback={<div className="flex-grow-1" />}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/props" element={<PropsDemo />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Register />} />
            <Route path="/recuperar-contrasena" element={<ForgotPassword />} />
            <Route path="/api" element={<Api />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
