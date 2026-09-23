import { merge } from "@lib/merge";

/**
 * @param {{ 
 *   className?: Partial<typeof appearance>
 * }} props
 */
function Kanban({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      Kanban
    </div>
  );
}

const appearance = {
  container: "centered"
};

export default Kanban;