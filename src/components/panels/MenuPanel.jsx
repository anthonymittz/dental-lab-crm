import Brand from "@/components/elements/Brand.jsx";
import Navigation from "@/components/elements/Navigation.jsx";
import { merge } from "@lib/merge";

/** @type {{primary: LinkMeta[], secondary: LinkMeta[]}} */
const links = {
  primary: [
    { id: 'agenda', to: '/app/agenda', label: 'Agenda', icon: 'calendarDays' },
    { id: 'orders', to: '/app/orders', label: 'Orders', icon: 'notepadText' },
    { id: 'deliveries', to: '/app/deliveries', label: 'Deliveries', icon: 'truck' },
    { id: 'business', to: '/app/business', label: 'Business', icon: 'handshake' },
    { id: 'finances', to: '/app/finances', label: 'Finances', icon: 'wallet' },
    { id: 'inventory', to: '/app/inventory', label: 'Inventory', icon: 'shelvingUnit' },
  ],
  secondary: [
    { id: 'settings', to: '/app/settings', label: 'Settings', icon: 'settings' },
    { id: 'start', to: '/', label: 'Sign out', icon: 'logout' },
  ]
};

/**
 * @param {{ 
 *   className?: Partial<typeof appearance>
 * }} props
 */
function MenuPanel({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      <Brand />
      <Navigation links={links.primary} />
      <Navigation links={links.secondary} />
    </div>
  );
}

const appearance = {
  container: "p-2 flex flex-col gap-1 justify-between items-center bg-primary-50"
};

export default MenuPanel;