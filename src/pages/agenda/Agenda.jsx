import Search from "@/components/elements/Search.jsx";
import TabLayout from "@/components/layouts/TabLayout.jsx";
import { merge } from "@lib/merge";

/** @type { TabData[] } */
const tabs = [
  { id: 'calendar', to: '/app/agenda/calendar', label: "Calendar", icon: 'calendarRange' },
  { id: 'kanban', to: '/app/agenda/kanban', label: "Kanban", icon: 'kanban' },
];

/**
 * @param {{ className?: ExtractClassName<TabLayout> }} props
 */
function Agenda({ className }) {
  return <TabLayout 
    title="Agenda"
    to="/app/agenda"
    tabs={tabs}
    hed={<Search />}
    className={className} 
    />;
}

export default Agenda;