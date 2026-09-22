import { merge } from "@lib/merge";

function Finances({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      Finances
    </div>
  );
}

const appearance = {
  container: "centered"
};

/**
 * @function Finances 
 * @param {{ 
 *   className?: Partial<typeof appearance>
 * }} props
 * @returns {JSX.Element}
 */

export default Finances;