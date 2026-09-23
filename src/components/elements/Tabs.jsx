import Icon from "@/components/elements/Icon.jsx";
import NavLink from "@/components/elements/NavLink.jsx";
import { merge } from "@lib/merge";

/** @type { TabMeta[] } */
const tabs = [
  { id: 'current', to: '/app/orders/current', label: "Current" },
  { id: 'archive', to: '/app/orders/archive', label: "Archive" },
  { id: 'projects', to: '/app/orders/projects', label: "Projects" },
  { id: 'tasks', to: '/app/orders/tasks', label: "Tasks" },
];

/**
 * @param {{ 
 *   className?: Partial<typeof listAppearance>
 * }} props
 */
function Tabs({ className = listAppearance }) {
  const a = merge(listAppearance, className);

  const list = tabs.map(t =>
    <Tab data={t} key={t.id} />)

  return <div className={a.container}>{ list }</div>;
}

/**
 * @param {{ data: TabMeta }} props 
 */
function Tab({ data }) {
  const a = merge(tabAppearance);
  return (
    <NavLink to={data.to} className={a.container}>
      <p className={a.label}>{data.label}</p>
    </NavLink>
  );
}

const listAppearance = {
  container: "flex gap-1"
};

const tabAppearance = {
  container: "flex items-center",
  label: ''
};

export default Tabs;