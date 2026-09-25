import { merge } from "@lib/merge";

/**
 * @param {{ 
 *   className?: Partial<typeof appearance>
 * }} props
 */
function NestedList({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      NestedList
    </div>
  );
}

const appearance = {
  container: "centered"
};

export default NestedList;