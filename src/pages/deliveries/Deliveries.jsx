import Search from "@/components/elements/Search.jsx";
import TabLayout from "@/components/layouts/TabLayout.jsx";
import { merge } from "@lib/merge";


/** @type { TabMeta[] } */
const tabs = [
  { id: 'current', to: '/app/deliveries/current', label: "Current", icon: 'package' },
  { id: 'planned', to: '/app/deliveries/planned', label: "Planned", icon: 'calendarClock' },
  { id: 'archived', to: '/app/deliveries/archived', label: "Archived", icon: 'archive' },
];

/**
 * @param {{ className?: ExtractClassName<TabLayout> }} props
 */
function Deliveries({ className }) {
  return <TabLayout 
    title="Deliveries"
    to="/app/deliveries"
    tabs={tabs}
    hed={<Search />}
    className={className} />
}

export default Deliveries;