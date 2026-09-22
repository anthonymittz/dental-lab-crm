import NavLink from "@/app/NavLink.jsx";
import { is, merge } from "@lib/merge";
import { DynamicIcon } from "lucide-react/dynamic.js";

/** @argument { MenuEntries } menu */
export function useElements(menu, nested = false) {
  return Object.entries(menu).map(([id, entry]) => 
    <MenuElement key={id} data={entry} nested={nested} />);
}

/**
 * @param {{ 
 *   data: MenuEntry
 *   nested?: boolean
 *   className?: typeof appearance
 * }} props 
 */
function MenuElement({
  data,
  nested = false,
  className = appearance
}) {
  const a = merge(appearance, className);
  const Link = ({ children }) =>
    data.link ? <NavLink to={data.link}>{children}</NavLink> : <>{children}</>;

  const list = data.items && useElements(data.items, true);
  
  const card = (
    <Link>
    <div className={a.card}>
      <DynamicIcon name={data.icon || 'dot'} />
      <span>{ nested ? data.name : '' }</span>
    </div>
    </Link>
  );

  return (
    <div className={a.container}>
      { card }
      {nested && <div className={is(a.list, `pl-3`)}>{list}</div> }
    </div>
  );
}

const appearance = {
  container: "",
  card: "flex flex-row gap-2 items-center",
  list: "pt-3 flex flex-col gap-2"
};

export default MenuElement;