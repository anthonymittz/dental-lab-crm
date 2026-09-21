import List from "@/app/List.jsx";
import { useElements } from "@/app/Menu/MenuElement.jsx";
import { merge } from "@lib/merge";

/** @type { MenuEntries } */
const menu = {
  schedule: {
    name: 'Agenda', icon: 'calendar-clock', link: '/agenda' 
  },
  orders: {
    name: 'Orders', icon: 'folders', link: '/work',
  },
  projects: { 
    name: 'Projects', icon: 'file-axis-3d', link: '/projects'
  },
  deliveries: { 
    name: 'Deliveries', icon: 'truck', link: '/deliveries',
  },
  business: {
    name: 'Business', icon: 'handshake', link: '/inventory',
    items: {
      offerables: { name: 'Products & Services', icon: 'hammer', link: '/business/offerables' },
      pricelists: { name: 'Pricelists', icon: 'hand-coins', link: '/business/pricelists' },
      clients: { name: 'Clients', icon: 'users-round', link: '/business/clients' },
      employees: { name: 'Employees', icon: 'id-card-lanyard', link: '/business/employees' },
      workflows: { name: 'Workflows', icon: 'workflow', link: '/business/workflow' },
    }
  },
  inventory: {
    name: 'Inventory', icon: 'shelving-unit', link: '/inventory'
  }
};

function Menu({ className = appearance }) {
  const a = merge(appearance, className);
  const elements = useElements(menu);

  return (
    <menu className={a.container}>
      <List items={elements} />
    </menu>
  );
}

const appearance = {
  container: "flex flex-col gap-2 card"
};

export default Menu;