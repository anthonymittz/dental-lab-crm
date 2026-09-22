import { merge } from "@lib/merge";
import { NavLink } from "react-router";

function Welcome({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      Welcome
      <NavLink to='/app'>Sign in</NavLink>
    </div>
  );
}

const appearance = {
  container: "centered"
};

export default Welcome;