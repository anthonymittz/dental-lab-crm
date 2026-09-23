import { is, merge } from "@lib/merge";

/**
 * @param {{ 
 *   items: Array<{ id: string, element: import("react").ReactNode }>
 *   asRow?: boolean
 *   className?: Partial<ReturnType<typeof appearance>>
 * }} props
 */
function List({
  items = [],
  asRow = false,
  className
}) {
  const a = merge(appearance(asRow), className || {});
  const elements = items.map(i => 
    <Element className={a.element} key={i.id}>{ i.element }</Element>)

  return <div className={a.container}>{ elements }</div>;
}

function Element({ className = "", children }) {
  return <div className={className}>{ children }</div>;
}

const appearance = isRow => ({
  container: is("flex", isRow ? "flex-row" : "flex-col"),
  element: ""
});

export default List;