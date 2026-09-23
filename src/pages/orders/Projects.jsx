import { merge } from "@lib/merge";

/**
 * @param {{ 
 *   className?: Partial<typeof appearance>
 * }} props
 */
function Projects({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      Projects
    </div>
  );
}

const appearance = {
  container: "centered"
};

export default Projects;