import { merge } from "@lib/merge";

/**
 * @param {{ 
 *   className?: Partial<typeof appearance>
 * }} props
 */
function Materials({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      Materials
    </div>
  );
}

const appearance = {
  container: "centered"
};

export default Materials;