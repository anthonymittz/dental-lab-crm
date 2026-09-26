import CollapsibleList, { dataToItems } from "@/components/elements/CollapsibleList/CollapsibleList.jsx";
import Table from "@/components/elements/Table.jsx";
import PaneLayout from "@/components/layouts/PaneLayout.jsx";
import data from "@/content/inventory/materials.json";
import tableData from "@/content/inventory/table.json";
import { merge } from "@lib/merge";
import { inventoryMaterials } from "@/content/descriptions.js";

/**
 * @param {{ 
 *   className?: Partial<typeof appearance>
 * }} props
 */
function Materials({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <PaneLayout flow="column" template="16rem 1fr" className="*:h-full *:overflow-y-auto">
      <CollapsibleList 
        items={dataToItems(data)} 
        className={{ container: 'p-2 bg-c-200 gap-2'}} />
      <Table initial={tableData} />
    </PaneLayout>
  );
}

const appearance = {
  container: ""
};

export default Materials;