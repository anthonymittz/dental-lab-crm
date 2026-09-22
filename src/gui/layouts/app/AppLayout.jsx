import { merge } from "@lib/merge";
import { Outlet } from "react-router";

/**
 * @param {{
 *   className?: Partial<typeof appearance>
 *   navigation?: import("react").ReactNode 
 * }} props
 */
function AppLayout({
  className = appearance,
  navigation = null
}) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      { navigation }
      <Outlet />
    </div>
  );
}

const appearance = {
  container: ""
};

export default AppLayout;