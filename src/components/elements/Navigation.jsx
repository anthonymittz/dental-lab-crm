import Icon from "@/components/elements/Icon.jsx";
import { is, merge } from "@lib/merge";
import { NavLink } from "react-router";

function Navigation({
  links,
  className = listAppearance
}) {
  const a = merge(listAppearance, className);

  const list = links.map(l => 
    <Link data={l} key={l.id} />)

  return <nav className={a.container}>{ list }</nav>;
}

function Link({ data }) {
  const a = merge(linkAppearance);

  return (
    <NavLink to={data.to} className={a.link}>
      <Icon strokeWidth={1.5} type={data.icon} />
      <div className={a.tooltip}>{data.label}</div>
    </NavLink>
  );
}

const listAppearance = {
  container: "flex flex-col gap-2",
};

const linkAppearance = {
  link: "group relative p-1.5 rounded-sm text-test-600 hover:bg-test-400 hover:text-test-900",
  tooltip: `
    absolute left-full top-1/2 ml-4 -translate-y-1/2 
    pointer-events-none whitespace-nowrap rounded-sm
    bg-test-300 px-2.5 py-1.5
    opacity-0 transition-opacity duration-200 group-hover:opacity-100`
};

export default Navigation;