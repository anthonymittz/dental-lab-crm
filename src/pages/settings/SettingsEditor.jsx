import HorizontalPaneLayout from "@/components/layouts/HorizontalPaneLayout.jsx";
import { is, merge } from "@lib/merge";

/**
 * @param {{ 
 *   className?: Partial<typeof appearance>
 * }} props
 */
function SettingsEditor({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <HorizontalPaneLayout columns={['max-content', '1fr']} className={a.container}>
      <div className={is(a.pane, "w-64")}>Foo</div>
      <div className={a.pane}>Foo</div>
    </HorizontalPaneLayout>
  );
}

const appearance = {
  container: "bg-transparent! *:bg-test-200",
  pane: "px-4 py-3"
};

export default SettingsEditor;