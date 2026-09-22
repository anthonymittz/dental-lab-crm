import { Route, Routes } from "react-router";

function App() {
  return (
    <Routes>
      <Route path='/' element={<div className="h-screen centered">App</div>} />
    </Routes>
  );
}

export default App;