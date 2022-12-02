import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Hello from "./component/Hello";
import Menu from "./component/Menu";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hello />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
