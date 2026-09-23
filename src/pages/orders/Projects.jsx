import GridLayout from "@/components/layouts/GridLayout.jsx";
import { merge } from "@lib/merge";

/** @type {GridItem[]} */
const items = [
  { id: 'p1', element: <Project data={{ doctor: 'Иванов', patient: 'Сидоров' }} /> },
  { id: 'p2', element: <Project data={{ doctor: 'Петров', patient: 'Иванченко' }} /> },
];

/**
 * @param {{ 
 *   className?: Partial<typeof appearance>
 * }} props
 */
function Projects({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      <GridLayout cols={3} items={items} />
    </div>
  );
}

function Project({ data = { doctor: 'Иванов', patient: 'Петров' } }) {
  return (
    <div className="bg-test-300 h-full flex flex-col justify-end p-2">
      <p className="text-sm">{ data.doctor }</p>
      <p className="text-lg font-semibold">{ data.patient }</p>
    </div>
  )
}

const appearance = {
  container: "h-full p-16"
};

export default Projects;