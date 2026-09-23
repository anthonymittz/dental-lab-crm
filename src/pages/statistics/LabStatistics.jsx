import { statisticsLab } from "@/descriptions.js";
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
      { statisticsLab }
    </div>
  );
}

const appearance = {
  container: "centered"
};

export default LabStatistics;