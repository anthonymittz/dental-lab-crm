import { businessOfferables } from "@/descriptions.js";
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
      { businessOfferables }
    </div>
  );
}

const appearance = {
  container: "centered"
};

export default Offerables;