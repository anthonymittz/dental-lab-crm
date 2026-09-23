import { is, merge } from "@lib/merge";

/**
 * @param {{ 
 *   items: GridItem[]
 *   rows?: number
 *   cols?: number
 *   className?: Partial<typeof appearance>
 * }} props
 */
function GridLayout({
  className = appearance,
  cols, rows,
  items = [],
}) {
  const a = merge(appearance, className, { 
    // container: `grid-cols-${cols ? cols.toString() : '2'}! grid-rows-${rows ? rows.toString() : '1'}!`
  });

  const elements = items.map(i => 
    <Element key={i.id} className={a.element}>{ i.element }</Element>)

  return (
    <div className={a.container}>
      { elements }
    </div>
  );
}

function Element({ className = "", children }) {
  return <div className={className}>{ children }</div>
}

/**
 * @param {GridSize} size 
 */
const appearance = {
  container: "h-full grid gap-2 grid-rows-3 grid-cols-8",
  element: ""
};

export default GridLayout;