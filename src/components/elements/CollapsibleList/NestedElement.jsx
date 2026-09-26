import Element from "@/components/elements/CollapsibleList/Element.jsx";
import { merge } from "@lib/merge";

/**
 * @param {{ 
 *   className?: Partial<typeof appearance>
 *   children?: import("react").ReactNode
 * }} props
 */
function NestedElement({
  className = appearance,
  children = null
}) {
  const a = merge(appearance, className);

  return (
    <Element>{ children }</Element>
  );
}

const appearance = {
  container: ""
};

export default NestedElement;