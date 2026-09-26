import Search from "@/components/elements/Search.jsx";
import TabLayout from "@/components/layouts/TabLayout.jsx";
import { merge } from "@lib/merge";

/** @type { TabData[] } */
const tabs = [
  { id: 'lab', to: '/app/statistics/lab', label: "Lab", icon: 'flaskConical' },
  { id: 'clinic', to: '/app/statistics/clinic', label: "Clinic", icon: 'hospital' },
];

/**
 * @param {{ className?: ExtractClassName<TabLayout> }} props
 */
function Statistics({ className }) {
  return <TabLayout 
    title="Statistics"
    to="/app/statistics"
    tabs={tabs}
    hed={<Search />}
    className={className}
    />;
}

export default Statistics;