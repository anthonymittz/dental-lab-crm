import { merge } from "@lib/merge";

function Dashboard({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      Dashboard
    </div>
  );
}

const appearance = {
  container: "centered"
};

/**
 * @function Dashboard 
 * @param {{ 
 *   className?: Partial<typeof appearance>
 * }} props
 * @returns {JSX.Element}
 */

export default Dashboard;