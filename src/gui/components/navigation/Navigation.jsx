import { merge } from "@lib/merge";
import { NavLink } from "react-router";

function Navigation({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <nav className={a.container}>
      <NavLink to='/'>Start</NavLink>
      <NavLink to='/app'>App</NavLink>
      <NavLink to='/app/dashboard'>Dashboard</NavLink>
      <NavLink to='/app/orders'>Orders</NavLink>
    </nav>
  );
}

const appearance = {
  container: ""
};

export default Navigation;