import { agendaOverview } from "@/content/descriptions.js";
import { merge } from "@lib/merge";

/**
 * @param {{ 
 *   className?: Partial<typeof appearance>
 * }} props
 */
function OverviewAgenda({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      { agendaOverview }
    </div>
  );
}

const appearance = {
  container: "centered"
};

export default OverviewAgenda;