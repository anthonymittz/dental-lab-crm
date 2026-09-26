import { statisticsClinic } from "@/content/descriptions.js";
import { merge } from "@lib/merge";

/**
 * @param {{ 
 *   className?: Partial<typeof appearance>
 * }} props
 */
function ClinicStatistics({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      { statisticsClinic }
    </div>
  );
}

const appearance = {
  container: "centered"
};

export default ClinicStatistics;