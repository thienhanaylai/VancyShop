import Header from "./layout/Header";
import Footer from "./layout/Footer";
import ListContact from "./layout/ListContact";
import ScrollToTop from "./utils/ScrollToTop";
import { Outlet, useRouteError } from "react-router";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      {useRouteError() ? <ErrorPage /> : <Outlet />}
      <Footer />
      <ListContact />
    </>
  );
}

export default App;
