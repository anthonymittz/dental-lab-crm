import CollapsibleList, { dataToItems } from "@/components/elements/CollapsibleList/CollapsibleList.jsx";
import Table from "@/components/elements/Table.jsx";
import PaneLayout from "@/components/layouts/PaneLayout.jsx";
import data from "@/content/inventory/materials.json";
import { merge } from "@lib/merge";
import { inventoryMaterials } from "@/content/descriptions.js";

/** @type {TablePayload} */
const table = {
  columns: {
    ids: ['id', 'name', 'quantity', 'location'],
    visible: ['name', 'quantity', 'location'],
    names: {
      id: 'ID',
      name: 'Name',
      quantity: 'Quantity',
      location: 'Location'
    },
    sizes: {
      id: '0fr',
      name: '2fr',
      quantity: '1fr',
      location: '1fr'
    },
    sortBy: "name",
    ascending: true
  },
  data: [
    ['1', 'Tape', 2, 'Shelf A'],
    ['2', 'Glue', 1, 'Shelf B'],
    ['3', 'Drilling bit', 4, 'Shelf C'],
  ]
}

/**
 * @param {{ 
 *   className?: Partial<typeof appearance>
 * }} props
 */
function Materials({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <PaneLayout flow="column" template="16rem 1fr">
      <CollapsibleList items={dataToItems(data)} className={{ container: 'p-2 bg-c-200'}} />
      <Table initial={table} />
    </PaneLayout>
  );
}

const appearance = {
  container: ""
};

export default Materials;