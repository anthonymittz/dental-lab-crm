import Search from "@/components/elements/Search.jsx";
import Tabs from "@/components/elements/Tabs.jsx";
import Title from "@/components/elements/Title.jsx";
import { merge } from "@lib/merge";
import { Outlet } from "react-router";

/** @type { TabMeta[] } */
const tabs = [
  { id: 'current', to: '/app/orders/current', label: "Current", icon: 'stickyNote' },
  { id: 'archive', to: '/app/orders/archive', label: "Archive", icon: 'archive' },
  { id: 'projects', to: '/app/orders/projects', label: "Projects", icon: 'fileBox' },
  { id: 'tasks', to: '/app/orders/tasks', label: "Tasks", icon: 'listTodo' },
];

function Orders({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      <div className={a.hed}>
        <Title to='/app/orders' className={a.section}>Orders</Title>
        <Search />
        <Tabs tabs={tabs} className={a.tabs} />
      </div>
      <Outlet />
    </div>
  );
}

const appearance = {
  container: "grid grid-rows-[max-content_1fr] gap-1 *:bg-test-200",
  hed: "flex gap-4 items-center px-4",
  section: "select-none uppercase text-sm font-semibold tracking-wide",
  tabs: "h-12 ml-auto",
  content: "px-4 py-2"
};

/**
 * @function Orders 
 * @param {{ 
 *   className?: Partial<typeof appearance>
 * }} props
 * @returns {JSX.Element}
 */

export default Orders;