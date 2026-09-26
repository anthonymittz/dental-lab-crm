import { merge } from "@lib/merge";

const dataA = [
  { id: '1', name: 'Tape', quantity: 2, location: 'Shelf A' },
  { id: '1', name: 'Glue', quantity: 2, location: 'Shelf B' }
];

const dataB = [
  { id: '1', name: 'Drilling bit', price: "250.99" },
  { id: '1', name: 'Laquer', price: "790.00" }
];

/**
 * @param {{ 
 *   className?: Partial<typeof appearance>
 * }} props
 */
function Table({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      <div className="flex">Header</div>
      <div className="flex">Table</div>
    </div>
  );
}

const appearance = {
  container: "h-full flex flex-col gap-1"
};

export default Table;