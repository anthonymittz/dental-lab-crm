import Navigation from "@/gui/components/navigation/Navigation.jsx";
import AppLayout from "@/gui/layouts/app/AppLayout.jsx";
import Dashboard from "@/sections/dashboard/Dashboard.jsx";
import Orders from "@/sections/orders/Orders.jsx";
import Welcome from "@/sections/welcome/Welcome.jsx";
import { Route, Routes } from "react-router";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Welcome />} />
      <Route path='/app' element={<AppLayout navigation={<Navigation />} />}>
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='orders' element={<Orders />} />
      </Route>
    </Routes>
  );
}

export default App;