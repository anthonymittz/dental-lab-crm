import Search from "@/components/elements/Search.jsx";
import TabLayout from "@/components/layouts/TabLayout.jsx";
import { merge } from "@lib/merge";

/** @type { TabData[] } */
const tabs = [
  { id: 'materials', to: '/app/inventory/materials', label: "Materials", icon: 'circlePile' },
  { id: 'tools', to: '/app/inventory/tools', label: "Tools", icon: 'drill' },
  { id: 'expendables', to: '/app/inventory/expendables', label: "Expendables", icon: 'recycle' },
];

/**
 * @param {{ className?: ExtractClassName<TabLayout> }} props
 */
function Inventory({ className }) {
  return <TabLayout 
    title="Inventory"
    to="/app/inventory"
    tabs={tabs}
    hed={<Search />}
    className={className}
    />
}

export default Inventory;