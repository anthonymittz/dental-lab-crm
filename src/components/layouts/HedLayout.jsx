import Tabs from "@/components/elements/Tabs.jsx";
import Title from "@/components/elements/Title.jsx";
import { merge } from "@lib/merge";
import { Outlet } from "react-router";

/**
 * @param {{ 
 *   title: string
 *   to?: string
 *   hed?: import("react").ReactNode
 *   className?: Partial<typeof appearance>
 *   children?: import("react").ReactNode
 * }} props
 */
function HedLayout({
  title, to, hed, children = null,
  className = appearance
}) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      <div className={a.hed}>
        <Title to={to} className={a.section}>{ title }</Title>
        { hed }
      </div>
      { children || <Outlet /> }
    </div>
  );
}

const appearance = {
  container: "grid grid-rows-[max-content_1fr] gap-1 *:bg-c-200",
  hed: "flex gap-4 items-center px-4 h-12 [&>*:nth-child(2)]:grow",
  section: "select-none uppercase text-sm font-semibold tracking-wide",
  content: "px-4 py-2"
};

export default HedLayout;