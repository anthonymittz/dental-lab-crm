import { agendaCalendar } from "@/descriptions.js";
import { merge } from "@lib/merge";

/**
 * @param {{ 
 *   className?: Partial<typeof appearance>
 * }} props
 */
function Calendar({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      { agendaCalendar }
    </div>
  );
}

const appearance = {
  container: "centered"
};

export default Calendar;