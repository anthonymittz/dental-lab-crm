import { Route, Routes } from "react-router";
import AppLayout from "@/components/layouts/AppLayout.jsx";

import Welcome from "@/pages/welcome/Welcome.jsx";
import Agenda from "@/pages/agenda/Agenda.jsx";
import Business from "@/pages/business/Business.jsx";
import Dashboard from "@/pages/dashboard/Dashboard.jsx";
import Deliveries from "@/pages/deliveries/Deliveries.jsx";
import Fallback from "@/pages/fallback/Fallback.jsx";
import Finances from "@/pages/finances/Finances.jsx";
import Inventory from "@/pages/inventory/Inventory.jsx";
import Orders from "@/pages/orders/Orders.jsx";
import Settings from "@/pages/settings/Settings.jsx";

import MenuPanel from "@/components/panels/MenuPanel.jsx";

import OverviewOrders from "@/pages/orders/OverviewOrders.jsx";
import CurrentOrders from "@/pages/orders/CurrentOrders.jsx";
import ArchivedOrders from "@/pages/orders/ArchivedOrders.jsx";
import Projects from "@/pages/orders/Projects.jsx";
import Tasks from "@/pages/orders/Tasks.jsx";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Welcome />} />
      <Route path='/app' element={<AppLayout menu={<MenuPanel />} />}>
        <Route path='agenda' element={<Agenda />} />
        <Route path='business' element={<Business />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='deliveries' element={<Deliveries />} />
        <Route path='fallback' element={<Fallback />} />
        <Route path='finances' element={<Finances />} />
        <Route path='inventory' element={<Inventory />} />
        <Route path='orders' element={<Orders />}>
          <Route index element={<OverviewOrders />} />
          <Route path='current' element={<CurrentOrders />} />
          <Route path='archive' element={<ArchivedOrders />} />
          <Route path='projects' element={<Projects />} />
          <Route path='tasks' element={<Tasks />} />
        </Route>
        <Route path='settings' element={<Settings />} />
        <Route path='welcome' element={<Welcome />} />
      </Route>
    </Routes>
  );
}

export default App;