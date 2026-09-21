import { StrictMode } from 'react';
import { HashRouter, Route, Routes } from 'react-router';
import Layout from '@/app/Layout.jsx';
import * as Pages from "./pages";

function App() {
  return (
    <StrictMode>
    <HashRouter>
    <Routes>
      <Route path="/" element={<Pages.Business />} />
      <Route path="/" element={<Layout />}>
        <Route path="/dashboard" element={<Pages.Dashboard />} />
        <Route path="/orders" element={<Pages.Orders />} />
        <Route path="/schedule" element={<Pages.Schedule />} />
        <Route path="/business" element={<Pages.Business />} />
        <Route path="/finances" element={<Pages.Finances />} />
        <Route path="/inventory" element={<Pages.Inventory />} />
        <Route path="/deliveries" element={<Pages.Deliveries />} />
        <Route path="/unimplemented" element={<Pages.Fallback />} />
      </Route>
    </Routes>
    </HashRouter>
    </StrictMode>
  );
}

export default App;