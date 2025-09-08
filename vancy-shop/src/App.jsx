import { Link } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import ListContact from "./layout/ListContact";

function App() {
  return (
    <div>
      <Header />
      <AppRoutes />
      <Footer />
      <ListContact />
    </div>
  );
}

export default App;
