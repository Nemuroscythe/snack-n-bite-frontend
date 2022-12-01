import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Hello from "./component/Hello";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hello />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
