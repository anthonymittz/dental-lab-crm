import List from "@/app/List.jsx";
import NavLink from "@/app/NavLink.jsx";
import { merge } from "@lib/merge";
import { CalendarDays, CircleOff, Handshake, NotepadText, ShelvingUnit, Truck, Wallet } from "lucide-react";

const NavElements = [
  // <NavItem icon={<LayoutDashboard />} link='/dashboard'>Overview</NavItem>,
  <NavItem icon={<NotepadText />} link='/orders'>Orders</NavItem>,
  <NavItem icon={<CalendarDays />} link='/schedule'>Schedule</NavItem>,
  <NavItem icon={<Handshake />} link='/business'>Business</NavItem>,
  <NavItem icon={<Wallet />} link='/finances'>Finances</NavItem>,
  <NavItem icon={<ShelvingUnit />} link='/inventory'>Inventory</NavItem>,
  <NavItem icon={<Truck />} link='/deliveries'>Deliveries</NavItem>,
  <NavItem icon={<CircleOff />} link='/unimplemented'>Unimplemented</NavItem>,
];

/**
 * @param {{
 *   icon?: import("react").ReactNode
 *   link?: string
 *   children?: import("react").ReactNode
 * }} props 
 */
function NavItem({
  icon,
  link,
  children
}) {
  const content = <div className={"flex gap-2"}>
    { icon }
    <p>{ children }</p>
  </div>;
  return link 
    ? <NavLink to={link} className={{ container: "flex gap-2" }}>{ content }</NavLink>
    : content;
}

function Menu({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <menu className={a.container}>
      <List items={NavElements} />
    </menu>
  );
}

const appearance = {
  container: "flex flex-col gap-2 card"
};

export default Menu;