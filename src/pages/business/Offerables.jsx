import { merge } from "@lib/merge";

/**
 * @param {{ 
 *   className?: Partial<typeof appearance>
 * }} props
 */
function Offerables({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      Products & Services
    </div>
  );
}

const appearance = {
  container: "centered"
};

export default Offerables;