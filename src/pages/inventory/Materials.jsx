import CollapsibleList from "@/components/elements/CollapsibleList.jsx";
import Table from "@/components/elements/Table.jsx";
import PaneLayout from "@/components/layouts/PaneLayout.jsx";
import { inventoryMaterials } from "@/descriptions.js";
import { merge } from "@lib/merge";

const items = [
  { 
    id: '1',
    element: 'Foo',
    sublist: [
      { id: '3', element: 'Buz' },
      { id: '4', element: 'Qux' },
    ]
  },
  { 
    id: '2', 
    element: 'Bar'
  },
];

/**
 * @param {{ 
 *   className?: Partial<typeof appearance>
 * }} props
 */
function Materials({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <PaneLayout flow="column" template="12rem 1fr" className="*:bg-test-200 *:p-2">
      <CollapsibleList items={items} />
      <Table />
    </PaneLayout>
  );
}

const appearance = {
  container: ""
};

export default Materials;