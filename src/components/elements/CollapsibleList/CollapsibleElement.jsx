import Button from "@/components/elements/Button.jsx";
import Icon from "@/components/elements/Icon.jsx";
import { is, merge } from "@lib/merge";
import { useState } from "react";

/** List element
 * @param {{
 *   className?: Partial<typeof appearance>
 *   sublist?: CollapsibleItems
 *   initiallyCollapsed?: boolean
 *   children?: import("react").ReactNode
 * }} props 
 */
function CollapsibleElement({
  className = appearance,
  sublist,
  initiallyCollapsed = false,
  children
}) {
  const [isCollapsed, setCollapsed] = useState(initiallyCollapsed);
  const a = merge(appearance, className, { icon: isCollapsed ? 'rotate-180' : 'rotate-0' });

  const before = sublist
    ? <Icon type="chevronDown" size={18} className={a.icon} />
    : <div className="w-[18px]" />;

  const nested = sublist && getElements(sublist);

  return (
    <div className={a.container}>
      <Button
        type="flat"
        size="sm"
        onClick={() => setCollapsed(p => !p)}
        className={{ container: a.button }}
      >
        {before}
        {children}
      </Button>
      {nested}
    </div>
  );
}

const appearance = {
  container: "flex flex-col items-stretch not-first:mt-2",
  button: "flex gap-1 items-center",
  icon: "transition-transform duration-300"
};

export function getElements(/** @type {CollapsibleItems} */items) {
  return items.map(i =>
    <CollapsibleElement key={i.id} sublist={i.sublist}>{i.element}</CollapsibleElement>);
}

export default CollapsibleElement;