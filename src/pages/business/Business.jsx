import { merge } from "@lib/merge";

function Business({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      Business
    </div>
  );
}

const appearance = {
  container: "centered"
};

/**
 * @function Business 
 * @param {{ 
 *   className?: Partial<typeof appearance>
 * }} props
 * @returns {JSX.Element}
 */

export default Business;