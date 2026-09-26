import { merge } from "@lib/merge";
import { Outlet } from "react-router";

/**
 * @param {{
 *   className?: Partial<typeof appearance>
 *   menu?: import("react").ReactNode
 *   children?: import("react").ReactNode
 * }} props
 */
function AppLayout({
  className = appearance,
  menu = null,
  children = null
}) {
  const a = merge(appearance, className);

  return (
    <div data-role="app-layout" className={a.container}>
      { menu }
      { children || <Outlet /> }
    </div>
  );
}

const appearance = {
  container: "h-screen p-1 grid gap-1 grid-cols-[max-content_1fr] overflow-hidden bg-c-100 text-c-800 tracking-wide"
};

export default AppLayout;