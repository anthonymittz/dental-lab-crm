import { Route, Routes } from "react-router";
import AppLayout from "@/components/layouts/AppLayout.jsx";

import Welcome from "@/pages/welcome/Welcome.jsx";
import Agenda from "@/pages/agenda/Agenda.jsx";
import Business from "@/pages/business/Business.jsx";
import Dashboard from "@/pages/dashboard/Dashboard.jsx";
import Deliveries from "@/pages/deliveries/Deliveries.jsx";
import Fallback from "@/pages/fallback/Fallback.jsx";
import Statistics from "@/pages/statistics/Statistics.jsx";
import Inventory from "@/pages/inventory/Inventory.jsx";
import Orders from "@/pages/orders/Orders.jsx";
import Settings from "@/pages/settings/Settings.jsx";

import MenuPanel from "@/components/panels/MenuPanel.jsx";

import OverviewOrders from "@/pages/orders/OverviewOrders.jsx";
import CurrentOrders from "@/pages/orders/CurrentOrders.jsx";
import ArchivedOrders from "@/pages/orders/ArchivedOrders.jsx";
import Projects from "@/pages/orders/Projects.jsx";
import Tasks from "@/pages/orders/Tasks.jsx";

import OverviewAgenda from "@/pages/agenda/OverviewAgenda.jsx";
import Calendar from "@/pages/agenda/Calendar.jsx";
import Kanban from "@/pages/agenda/Kanban.jsx";

import OverviewDeliveries from "@/pages/deliveries/OverviewDeliveries.jsx";
import CurrentDeliveries from "@/pages/deliveries/CurrentDeliveries.jsx";
import PlannedDeliveries from "@/pages/deliveries/PlannedDeliveries.jsx";
import ArchivedDeliveries from "@/pages/deliveries/ArchivedDeliveries.jsx";

import OverviewBusiness from "@/pages/business/OverviewBusiness.jsx";
import Offerables from "@/pages/business/Offerables.jsx";
import Pricelists from "@/pages/business/Pricelists.jsx";
import Employees from "@/pages/business/Employees.jsx";
import Workflows from "@/pages/business/Workflows.jsx";

import OverviewStatistics from "@/pages/statistics/OverviewStatistics.jsx";
import LabStatistics from "@/pages/statistics/LabStatistics.jsx";
import ClinicStatistics from "@/pages/statistics/ClinicStatistics.jsx";

import OverviewInventory from "@/pages/inventory/OverviewInventory.jsx";
import Materials from "@/pages/inventory/Materials.jsx";
import Tools from "@/pages/inventory/Tools.jsx";
import Expendables from "@/pages/inventory/Expendables.jsx";
import SettingsEditor from "@/pages/settings/SettingsEditor.jsx";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Welcome />} />
      <Route path='/app' element={<AppLayout menu={<MenuPanel />} />}>
        <Route path='welcome' element={<Welcome />} />
        <Route path='agenda' element={<Agenda />}>
          <Route index element={<OverviewAgenda />} />
          <Route path='calendar' element={<Calendar />} />
          <Route path='kanban' element={<Kanban />} />
        </Route>
        <Route path='business' element={<Business />}>
          <Route index element={<OverviewBusiness />} />
          <Route path="offerables" element={<Offerables />} />
          <Route path="pricelists" element={<Pricelists />} />
          <Route path="employees" element={<Employees />} />
          <Route path="workflows" element={<Workflows />} />
        </Route>
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='deliveries' element={<Deliveries />}>
          <Route index element={<OverviewDeliveries />} />
          <Route path='current' element={<CurrentDeliveries />} />
          <Route path='planned' element={<PlannedDeliveries />} />
          <Route path='archived' element={<ArchivedDeliveries />} />
        </Route>
        <Route path='statistics' element={<Statistics />}>
          <Route index element={<OverviewStatistics />} />
          <Route path='lab' element={<LabStatistics />} />
          <Route path='clinic' element={<ClinicStatistics />} />
        </Route>
        <Route path='inventory' element={<Inventory />}>
          <Route index element={<OverviewInventory />} />
          <Route path='materials' element={<Materials />} />
          <Route path='tools' element={<Tools />} />
          <Route path='expendables' element={<Expendables />} />
        </Route>
        <Route path='orders' element={<Orders />}>
          <Route index element={<OverviewOrders />} />
          <Route path='current' element={<CurrentOrders />} />
          <Route path='archive' element={<ArchivedOrders />} />
          <Route path='projects' element={<Projects />} />
          <Route path='tasks' element={<Tasks />} />
        </Route>
        <Route path='settings' element={<Settings />}>
          <Route index element={<SettingsEditor />} />
        </Route>
        <Route path='fallback' element={<Fallback />} />
      </Route>
    </Routes>
  );
}

export default App;