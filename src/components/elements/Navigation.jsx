import Icon from "@/components/elements/Icon.jsx";
import { merge } from "@lib/merge";
import { NavLink } from "react-router";

function Navigation({
  links,
  className = appearance
}) {
  const a = merge(appearance, className);

  const list = links.map(l => 
    <NavLink key={l.id} to={l.to} title={l.label} className={a.link}><Icon type={l.icon} /></NavLink>)

  return <nav className={a.container}>{ list }</nav>;
}

const appearance = {
  container: "flex flex-col gap-2",
  link: "p-2 hover:bg-accent-100 rounded-sm"
};

export default Navigation;