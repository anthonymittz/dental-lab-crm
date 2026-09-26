import Button from "@/components/elements/Button.jsx";
import Icon from "@/components/elements/Icon.jsx";
import { is, merge } from "@lib/merge";

/** List items
 * @typedef {Array<{ id: string, element: import("react").ReactNode, sublist?: CollapsibleItems }>} CollapsibleItems
 */

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

function getElements(/** @type {CollapsibleItems} */items, level = 0) {
  return items.flatMap(i => {
    return i.sublist 
      ? ([
        <Element key={i.id} level={level}>{i.element}</Element>,
        ...getElements(i.sublist, level + 1)
      ])
      : <Element key={i.id} level={level}>{i.element}</Element>;
  })
}

/** List element
 * @param {{
 *   className?: string
 *   level: number
 *   children?: import("react").ReactNode
 * }} props 
 */
function Element({ className = "", level, children }) {
  const container = is(
    'flex gap-1 items-center', 
    level === 0 ? 'not-first:mt-2' : 'ml-[22px]', className
  );

  return (
    <Button 
      type="flat" 
      size="sm" 
      className={{ container }}>
        { level === 0 && <Icon type="chevronDown" size={18} /> }
        {children}
    </Button>
  );
}

export default CollapsibleList;