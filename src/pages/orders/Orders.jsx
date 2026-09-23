import Search from "@/components/elements/Search.jsx";
import Tabs from "@/components/elements/Tabs.jsx";
import Title from "@/components/elements/Title.jsx";
import TabLayout from "@/components/layouts/TabLayout.jsx";
import { merge } from "@lib/merge";
import { Outlet } from "react-router";

/** @type { TabMeta[] } */
const tabs = [
  { id: 'current', to: '/app/orders/current', label: "Current", icon: 'stickyNote' },
  { id: 'archive', to: '/app/orders/archive', label: "Archive", icon: 'archive' },
  { id: 'projects', to: '/app/orders/projects', label: "Projects", icon: 'fileBox' },
  { id: 'tasks', to: '/app/orders/tasks', label: "Tasks", icon: 'listTodo' },
];

/**
 * @param {{ 
 *   className?: Partial<import("react").ComponentProps<typeof TabLayout>['className']>
 * }} props
 */
function Orders({ className }) {
  return <TabLayout 
    title="Orders" 
    to="/app/orders" 
    hed={<Search />} 
    tabs={tabs} 
    className={className} />;
}

export default Orders;