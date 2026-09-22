import List from "@/app/List.jsx";
import { merge } from "@lib/merge";
import { DynamicIcon } from "lucide-react/dynamic.js";

/** @type {MenuEntry[]} */
const menu = [
  { id: 'schedule', name: 'Agenda', icon: 'calendar-clock', link: '/agenda' },
  { id: 'orders', name: 'Orders', icon: 'notepad-text', link: '/orders' },
  { id: 'projects', name: 'Projects', icon: 'folders', link: '/projects' },
  { id: 'deliveries', name: 'Deliveries', icon: 'truck', link: '/deliveries' },
  { id: 'business', name: 'Business', icon: 'handshake', link: '/inventory',
    items: [
      { id: "offerables", name: 'Products & Services', icon: 'hammer', link: '/business/offerables' },
      { id: "pricelists", name: 'Pricelists', icon: 'hand-coins', link: '/business/pricelists' },
      { id: "clients", name: 'Clients', icon: 'users-round', link: '/business/clients' },
      { id: "employees", name: 'Employees', icon: 'id-card-lanyard', link: '/business/employees' },
      { id: "workflows", name: 'Workflows', icon: 'workflow', link: '/business/workflow' },
    ]
  },
  { id: 'inventory', name: 'Inventory', icon: 'shelving-unit', link: '/inventory' }
];

function Menu({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <menu className={a.container}>
      <List asRow items={menuToElements(menu)} />
    </menu>
  );
}

/** @param {MenuEntry[]} menu */
function menuToElements(menu) {
  const elements = menu.map(entry => <Element key={entry.id} entry={entry} />);
  return elements;
}

/**
 * @param {{ entry: MenuEntry }} props
 */
function Element({ entry }) {
  const icon = entry.icon && <DynamicIcon name={entry.icon} />;
  return (
    <div className="group relative h-full flex flex-col justify-center items-center px-2">
      { icon }
      <div className="absolute top-full left-1/2 mt-2 -translate-x-1/2 px-x py-1 transition-all duration-200 opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-10">
        { entry.name }
      </div>
    </div>
  );
}

const appearance = {
  container: "flex justify-center h-full"
};

export default Menu;