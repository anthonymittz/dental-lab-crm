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
      Calendar
    </div>
  );
}

const appearance = {
  container: "centered"
};

export default Calendar;