import Search from "@/components/elements/Search.jsx";
import TabLayout from "@/components/layouts/TabLayout.jsx";

/** @type { TabData[] } */
const tabs = [
  { id: 'current', to: '/app/orders/current', label: "Current", icon: 'stickyNote' },
  { id: 'archive', to: '/app/orders/archive', label: "Archive", icon: 'archive' },
  { id: 'projects', to: '/app/orders/projects', label: "Projects", icon: 'fileBox' },
  { id: 'tasks', to: '/app/orders/tasks', label: "Tasks", icon: 'listTodo' },
];

/**
 * @param {{ className?: ExtractClassName<TabLayout> }} props
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