import NavLink from "@/app/NavLink.jsx";
import { is, merge } from "@lib/merge";
import { DynamicIcon } from "lucide-react/dynamic.js";

/** @argument { MenuEntries } menu */
export function useElements(menu, level = 1) {
  return Object.entries(menu).map(([id, entry]) => 
    <MenuElement key={id} data={entry} level={level} />);
}

/**
 * @param {{ 
 *   data: MenuEntry
 *   level?: number
 *   className?: typeof appearance
 * }} props 
 */
function MenuElement({
  data,
  level = 1,
  className = appearance
}) {
  const a = merge(appearance, className);
  const Link = ({ children }) =>
    data.link ? <NavLink to={data.link}>{children}</NavLink> : <>{children}</>;

  const nested = data.items && useElements(data.items, level + 1);
  
  const card = (
    <Link>
    <div className={a.card}>
      <DynamicIcon name={data.icon || 'dot'} className={is(level > 1 && 'text-gray-600')} />
        <span className={is(level === 1 && 'font-semibold', level > 1 && 'text-gray-600')}>{data.name}</span>
    </div>
    </Link>
  );

  return (
    <div className={a.container}>
      { card }
      { nested && <div className={is(a.list, `pl-3`)}>{nested}</div> }
    </div>
  );
}

const appearance = {
  container: "flex flex-col gap-2 pb-3",
  card: "flex flex-row gap-2 items-center",
  list: "pt-3 flex flex-col gap-2"
};

export default MenuElement;