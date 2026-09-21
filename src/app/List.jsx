import { merge } from "@lib/merge";

/**
 * @param {{
 *   items?: import('react').ReactNode[]
 *   isRow?: boolean
 *   className?: typeof appearance
 * }} props 
 */
function List({
  items = [],
  isRow = false,
  className = appearance
}) {
  const a = merge(appearance, { container: isRow ? 'flex-row' : 'flex-col' }, className);

  if (!items) return null;
  const itemElements = items.map((item, i) => <li key={i} className={a.element}>{item}</li>);
  return <ul className={a.container}>{itemElements}</ul>;
}

const appearance = {
  container: "flex gap-4",
  element: "",
};

export default List;