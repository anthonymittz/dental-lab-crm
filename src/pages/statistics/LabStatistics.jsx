import { merge } from "@lib/merge";

/**
 * @param {{ 
 *   className?: Partial<typeof appearance>
 * }} props
 */
function LabStatistics({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      Lab Statistics
    </div>
  );
}

const appearance = {
  container: "centered"
};

export default LabStatistics;