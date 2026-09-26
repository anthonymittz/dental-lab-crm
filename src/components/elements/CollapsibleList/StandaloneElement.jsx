import Element from "@/components/elements/CollapsibleList/Element.jsx";
import { is, merge } from "@lib/merge";

/**
 * @param {{ 
 *   className?: Partial<typeof appearance>
 *   children?: import("react").ReactNode
 * }} props
 */
function StandaloneElement({
  className = appearance,
  children = null
}) {
  return <Element className={is(appearance, className)}>{ children }</Element>;
}

/** @type {string} */
const appearance = "pl-[30px]!";

export default StandaloneElement;