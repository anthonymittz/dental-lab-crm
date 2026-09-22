import Icon from "@/components/elements/icon/Icon.jsx";
import { merge } from "@lib/merge";
import { NavLink } from "react-router";

function Navigation({
  links,
  className = appearance
}) {
  const a = merge(appearance, className);

  const list = links.map(l => 
    <NavLink key={l.id} to={l.to} title={l.label} className='p-2'><Icon type={l.icon} /></NavLink>)

  return <nav className={a.container}>{ list }</nav>;
}

const appearance = {
  container: "flex gap-2"
};

export default Navigation;