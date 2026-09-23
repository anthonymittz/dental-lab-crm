import { agendaKanban } from "@/descriptions.js";
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
      { agendaKanban }
    </div>
  );
}

const appearance = {
  container: "centered"
};

export default Kanban;