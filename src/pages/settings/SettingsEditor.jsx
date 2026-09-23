import { merge } from "@lib/merge";

/**
 * @param {{ 
 *   className?: Partial<typeof appearance>
 * }} props
 */
function SettingsEditor({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      Settings Editor
    </div>
  );
}

const appearance = {
  container: "centered"
};

export default SettingsEditor;