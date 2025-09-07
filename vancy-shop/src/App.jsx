import "./App.css";
import { Link } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

function App() {
  return (
    <div>
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
