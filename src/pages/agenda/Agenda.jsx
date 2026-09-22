import { merge } from "@lib/merge";

function Agenda({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      Agenda
    </div>
  );
}

const appearance = {
  container: "centered"
};

/**
 * @function Agenda 
 * @param {{ 
 *   className?: Partial<typeof appearance>
 * }} props
 * @returns {JSX.Element}
 */

export default Agenda;