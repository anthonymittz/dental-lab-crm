import { getElements } from "@/components/elements/CollapsibleList/CollapsibleElement.jsx";
import { merge } from "@lib/merge";

/** Collapsible list
 * @param {{
 *   items?: CollapsibleItems 
 *   className?: Partial<typeof appearance>
 * }} props
 */
function CollapsibleList({
  items = [],
  className = appearance
}) {
  if (!items) return null;
  const a = merge(appearance, className);
  
  return (
    <div className={a.container}>
      { getElements(items) }
    </div>
  );
}

const appearance = {
  container: "h-full flex flex-col items-stretch"
};

export default CollapsibleList;