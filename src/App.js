import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "./componets/Footer";
import Navber from "./componets/Navber";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useAuthContext } from "./hooks/useAuthContext";

const App = () => {
  const { user } = useAuthContext();
  return (
    <div className="app bg-slate-900 text-slate-100 min-h-screen flex flex-col justify-between">
      <Navber />
      <Routes className="relative">
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={!user ? <Signup /> : <Navigate to="/" />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
