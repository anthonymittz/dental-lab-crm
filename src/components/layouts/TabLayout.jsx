import Tabs from "@/components/elements/Tabs.jsx";
import Title from "@/components/elements/Title.jsx";
import { merge } from "@lib/merge";
import { Outlet } from "react-router";

/**
 * `Tabs: {id, to, label, icon?}`
 * @param {{ 
 *   title: string
 *   tabs: TabData[]
 *   to?: string
 *   hed?: import("react").ReactNode
 *   className?: Partial<typeof appearance>
 *   children?: import("react").ReactNode
 * }} props
 */
function TabLayout({
  title, tabs, to, hed,
  className = appearance,
  children = null
}) {
  const a = merge(appearance, className);

  return (
    <div data-role="tab-layout" className={a.container}>
      <div className={a.hed}>
        <Title to={to} className={a.section}>{ title }</Title>
        { hed }
        <Tabs tabs={tabs} className={a.tabs} />
      </div>
      { children || <Outlet /> }
    </div>
  );
}

const appearance = {
  container: "grid grid-rows-[max-content_1fr] gap-1 overflow-hidden", // "*:bg-c-200"
  hed: "flex gap-4 items-center px-4 bg-c-200",
  section: "select-none uppercase text-sm font-semibold tracking-wide",
  tabs: "h-12 ml-auto",
  content: "px-4 py-2"
};

export default TabLayout;