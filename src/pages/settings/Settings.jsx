import { merge } from "@lib/merge";

function Settings({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      Settings
    </div>
  );
}

const appearance = {
  container: "centered"
};

/**
 * @function Settings 
 * @param {{ 
 *   className?: Partial<typeof appearance>
 * }} props
 * @returns {JSX.Element}
 */

export default Settings;