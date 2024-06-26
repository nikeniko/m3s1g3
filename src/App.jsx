import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyFooter from "./components/Footer";
import MyNav from "./components/NavBar";
import Welcome from "./components/Welcom";
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <div>
      <MyNav />
      <Welcome />
      <AllTheBooks />
      <MyFooter />
    </div>
  );
}

export default App;
