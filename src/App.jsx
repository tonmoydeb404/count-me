import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import "./styles/App.css";

function App() {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100">
      <Home />
    </div>
  );
}

export default App;
