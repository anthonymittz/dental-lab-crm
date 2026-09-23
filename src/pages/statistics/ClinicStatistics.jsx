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
      Clinic Statistics
    </div>
  );
}

const appearance = {
  container: "centered"
};

export default ClinicStatistics;