import Search from "@/components/elements/Search.jsx";
import Tabs from "@/components/elements/Tabs.jsx";
import { merge } from "@lib/merge";
import { Outlet } from "react-router";

function Orders({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      <div className={a.hed}>
        <h2 className={a.section}>Orders</h2>
        <Search />
        <Tabs className={a.tabs} />
      </div>
      <Outlet />
    </div>
  );
}

const appearance = {
  container: "grid grid-rows-[max-content_1fr] gap-1 *:bg-test-200",
  hed: "flex gap-4 items-center px-4",
  section: "select-none uppercase text-sm font-semibold tracking-wide",
  tabs: "h-12 ml-auto",
  content: "px-4 py-2"
};

/**
 * @function Orders 
 * @param {{ 
 *   className?: Partial<typeof appearance>
 * }} props
 * @returns {JSX.Element}
 */

export default Orders;