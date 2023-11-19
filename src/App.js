import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Filter from "./pages/filter";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={< HomePage/>} />
        <Route path="/filter" element={<Filter />} />
      </Routes>
    </div>
  );
}

export default App;
