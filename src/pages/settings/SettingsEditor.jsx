import { merge } from "@lib/merge";

/**
 * @param {{ 
 *   title?: string
 *   className?: Partial<typeof appearance>
 * }} props
 */
function SettingsEditor({
  className = appearance,
  title = "Settings"
}) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      <h3 className={a.title}>{ title }</h3>
    </div>
  );
}

const appearance = {
  container: "centered",
  title: "font-bold text-lg",
};

export default SettingsEditor;