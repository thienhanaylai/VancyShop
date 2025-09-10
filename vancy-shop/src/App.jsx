import AppRoutes from "./routes/AppRoutes";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import ListContact from "./layout/ListContact";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <AppRoutes />
      <Footer />
      <ListContact />
    </>
  );
}

export default App;
