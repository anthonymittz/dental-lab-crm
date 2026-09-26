import Icon from "@/components/elements/Icon.jsx";
import NavLink from "@/components/elements/NavLink.jsx";
import { is, merge } from "@lib/merge";
import { useMatch } from "react-router";
// import { NavLink } from "react-router";

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
  const isActive = useMatch(data.to);

  return (
    <div className={is(a.container, isActive && 'bg-c-400 text-c-900')}>
      <NavLink to={data.to} className={{container: a.link}}>
        <Icon strokeWidth={1.5} type={data.icon} />
      </NavLink>
      <div className={a.tooltip}>{data.label}</div>
    </div>
  );
}

const listAppearance = {
  container: "flex flex-col gap-2",
};

const linkAppearance = {
  container: "group relative flex justify-center items-center rounded-sm text-c-600 hover:bg-c-400 hover:text-c-900 has-[:focus-visible]:bg-c-400 aspect-square shring-0",
  link: "p-1.5 focus-visible:outline-none focus-visible:ring-0",
  tooltip: `
    absolute left-full top-1/2 ml-4 -translate-y-1/2 
    pointer-events-none whitespace-nowrap rounded-sm
    bg-c-300 px-2.5 py-1.5
    opacity-0 transition-opacity duration-200 group-hover:opacity-100`
};

export default Navigation;