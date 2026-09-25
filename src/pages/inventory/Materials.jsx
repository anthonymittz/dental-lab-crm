import DummyList from "@/components/elements/DummyList.jsx";
import Table from "@/components/elements/Table.jsx";
import PaneLayout from "@/components/layouts/PaneLayout.jsx";
import { inventoryMaterials } from "@/descriptions.js";
import { merge } from "@lib/merge";

/**
 * @param {{ 
 *   className?: Partial<typeof appearance>
 * }} props
 */
function Materials({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <PaneLayout flow="column" template="12rem 1fr">
      <DummyList />
      <Table />
    </PaneLayout>
  );
}

const appearance = {
  container: ""
};

export default Materials;