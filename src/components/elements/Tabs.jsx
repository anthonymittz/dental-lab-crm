import Icon from "@/components/elements/Icon.jsx";
import NavLink from "@/components/elements/NavLink.jsx";
import { is, merge } from "@lib/merge";
import { useMatch } from "react-router";

/**
 * @param {{ 
 *   tabs: TabMeta[]
 *   className?: typeof listAppearance
 * }} props
 */
function Tabs({
  tabs,
  className = listAppearance
}) {
  const list = tabs.map(t =>
    <Tab data={t} key={t.id} />)

  return <div className={is(listAppearance, className)}>{ list }</div>;
}

/**
 * @param {{ data: TabMeta }} props 
 */
function Tab({ data }) {
  const a = merge(tabAppearance);
  const isCurrent = useMatch(data.to);
  return (
    <NavLink to={data.to} className={{ container: is(a.container, isCurrent ? 'text-test-900' : 'text-test-500') }}>
      { data.icon && <Icon type={data.icon} size={18} strokeWidth={2} /> }
      <p className={a.label}>{data.label}</p>
      { isCurrent && <div className={a.highlight} /> }
    </NavLink>
  );
}

/** @type {string} */
const listAppearance = "flex gap-1";

const tabAppearance = {
  container: "group flex gap-2 items-center px-3 relative border-x-3 border-t-3 border-test-100 mt-2 rounded-t-md",
  label: "font-semibold",
  highlight: "absolute h-1 top-full left-0 right-0 bg-test-200"
};

export default Tabs;