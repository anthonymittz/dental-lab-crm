import Button from "@/components/elements/Button.jsx";
import Element from "@/components/elements/CollapsibleList/Element.jsx";
import Icon from "@/components/elements/Icon.jsx";
import { is, merge } from "@lib/merge";
import { useState } from "react";

/** List element
 * @param {{
 *   className?: Partial<typeof appearance>
 *   sublist?: CollapsibleElement[]
 *   collapsed?: boolean
 *   hed?: import("react").ReactNode
 *   children?: import("react").ReactNode
 * }} props 
 */
function CollapsibleElement({
  className = appearance,
  hed,
  collapsed = false,
  children
}) {
  const [isCollapsed, setCollapsed] = useState(collapsed);
  const a = merge(appearance, className);

  return (
    <>
      <Element className={a.element} onClick={() => setCollapsed(p => !p)}>
        <Arrow isCollapsed={isCollapsed} />
        { hed }
      </Element>
      <Collapsible isCollapsed={isCollapsed} inert={isCollapsed} className={a.collapsible}>
        { children }
      </Collapsible>
    </>
  );
}

const appearance = {
  element: "",
  collapsible: ""
};

// --------------------------------------------------------------- Utility -----

function Collapsible({ isCollapsed, children, inert, className }) {
  const wrapper = is(
    "grid transition-all duration-200 ease-in-out ml-[22px]",
    isCollapsed ? 'grid-rows-[0fr]' : "grid-rows-[1fr]",
    className
  );
  
  return (
    <div className={wrapper} inert={inert}>
    <div className="flex flex-col items-stretch overflow-hidden">
      { children }
    </div>
    </div>
  );
}

function Arrow({ isCollapsed }) {
  const style = is(
    "transition-transform duration-200",
    isCollapsed ? 'rotate-0' : 'rotate-180'
  );

  return <Icon type="chevronDown" size={18} className={style} />;
}

export default CollapsibleElement;