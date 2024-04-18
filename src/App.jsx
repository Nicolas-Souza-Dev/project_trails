import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { TrilhasContextProvider } from "./context/TrilhasContext";
import Footer from "../src/components/Footer/footer.jsx";

function App() {
 return (
  <TrilhasContextProvider>
   <Header />
   <Outlet />
   <Footer />
  </TrilhasContextProvider>
 );
}

export default App;
