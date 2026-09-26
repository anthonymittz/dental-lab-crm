import { merge } from "@lib/merge";
import CollapsibleElement from "@/components/elements/CollapsibleList/CollapsibleElement.jsx";
import NestedElement from "@/components/elements/CollapsibleList/NestedElement.jsx";
import StandaloneElement from "@/components/elements/CollapsibleList/StandaloneElement.jsx";

/** Collapsible list
 * @param {{
 *   items?: CollapsibleElement[]
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

/** @param {CollapsibleElement[]} items */
function getElements(items) {
  return items.map(i => i.sublist
    ? <CollapsibleElement key={i.id} hed={i.element} collapsed>{
        i.sublist.map(s => <NestedElement key={s.id}>{ s.element }</NestedElement>)
      }</CollapsibleElement>
    : <StandaloneElement key={i.id}>{i.element}</StandaloneElement>);
}

/** Data parser for CollapsibleList consumption.
 * @param {CollapsibleItem[]} data 
 * @returns {CollapsibleElement[]}
 */
export function dataToItems(data) {
  return data.map(i => ({
    id: i.id,
    element: <div className="whitespace-pre-wrap">{ i.element }</div>,
    sublist: i.sublist ? dataToItems(i.sublist) : undefined
  }));
}

const appearance = {
  container: "h-full flex flex-col items-stretch"
};

export default CollapsibleList;