import { merge } from "@lib/merge";

/**
 * @param {{ 
 *   className?: Partial<typeof appearance>
 * }} props
 */
function Pricelists({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      Price Lists
    </div>
  );
}

const appearance = {
  container: "centered"
};

export default Pricelists;