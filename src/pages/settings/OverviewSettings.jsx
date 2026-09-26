import List from "@/components/elements/List.jsx";
import NavLink from "@/components/elements/NavLink.jsx";
import PaneLayout from "@/components/layouts/PaneLayout.jsx";
import SettingsEditor from "@/pages/settings/SettingsEditor.jsx";
import { is, merge } from "@lib/merge";
import { Outlet } from "react-router";

const links = [
  { id: 'general', label: 'General', to: '/app/settings/general' },
  { id: 'storage', label: 'Storage', to: '/app/settings/storage' },
  { id: 'appearance', label: 'Appearance', to: '/app/settings/appearance' },
  { id: 'extensions', label: 'Extensions', to: '/app/settings/extensions' },
];

const items = links.map(l => 
  ({ id: l.id, element: <NavLink className={{ container: "block py-2", active: "font-semibold" }} to={l.to} key={l.id}>{l.label}</NavLink> }));

/**
 * @param {{ 
 *   className?: Partial<typeof appearance>
 * }} props
 */
function OverviewSettings({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <PaneLayout columns={['max-content', '1fr']} className={a.container}>
      <List items={items} className={{ container: is(a.pane, 'w-64') }} />
      <Outlet />
    </PaneLayout>
  );
}

const appearance = {
  container: "bg-transparent! *:bg-c-200",
  pane: "px-4 py-3"
};

export default OverviewSettings;