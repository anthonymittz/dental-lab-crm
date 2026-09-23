import { is, merge } from "@lib/merge";

/**
 * @param {{ 
 *   columns?: string[]
 *   className?: appearance
 *   children?: import("react").ReactNode
 * }} props
 */
function HorizontalPaneLayout({
  className = appearance,
  columns,
  children = null
}) {
  const style = is(appearance, className, columns ? `grid-cols-[${columns.join('_')}]` : 'auto-cols-fr');
  return <div className={style}>{ children }</div>;
}

/** @type {string} */
const appearance = "grid grid-flow-col gap-1";

export default HorizontalPaneLayout;