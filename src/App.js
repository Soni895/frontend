import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={< div/>} />
        <Route path="/addemployee" element={<div />} />
      </Routes>
    </div>
  );
}

export default App;
