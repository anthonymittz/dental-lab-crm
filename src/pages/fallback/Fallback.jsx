import { merge } from "@lib/merge";

function Fallback({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      Fallback
    </div>
  );
}

const appearance = {
  container: "centered"
};

/**
 * @function Fallback 
 * @param {{ 
 *   className?: Partial<typeof appearance>
 * }} props
 * @returns {JSX.Element}
 */

export default Fallback;