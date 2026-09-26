import CollapsibleList from "@/components/elements/CollapsibleList/CollapsibleList.jsx";
import Table from "@/components/elements/Table.jsx";
import PaneLayout from "@/components/layouts/PaneLayout.jsx";
import { inventoryMaterials } from "@/descriptions.js";
import { merge } from "@lib/merge";

const items = [
  { 
    id: '7198',
    element: 'Гипс',
    sublist: [
      { id: '9b9b', element: <>2 класс<br />(антагонисты)</> },
      { id: '4ed0', element: <>3 класс<br />(цоколи)</> },
      { id: '847a', element: <>4 класс<br />(разборные модели)</> },
    ]
  },
  { 
    id: '1b7b', 
    element: 'Керамика'
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