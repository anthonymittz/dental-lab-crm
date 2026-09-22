import { merge } from "@lib/merge";
import { Outlet } from "react-router";

/**
 * @param {{
 *   className?: Partial<typeof appearance>
 *   menu?: import("react").ReactNode 
 * }} props
 */
function AppLayout({
  className = appearance,
  menu = null
}) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      { menu }
      <Outlet />
    </div>
  );
}

const appearance = {
  container: "h-screen grid gap-1 p-1 grid-cols-[max-content_1fr] bg-test-100 text-test-800 tracking-wide"
};

export default AppLayout;