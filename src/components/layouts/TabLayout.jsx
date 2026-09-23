import { merge } from "@lib/merge";

/**
 * @param {{ 
 *   className?: Partial<typeof appearance>
 * }} props
 */
function TabLayout({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      TabLayout
    </div>
  );
}

const appearance = {
  container: "centered"
};

export default TabLayout;