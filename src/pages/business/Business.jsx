import Search from "@/components/elements/Search.jsx";
import TabLayout from "@/components/layouts/TabLayout.jsx";
import { merge } from "@lib/merge";

/** @type { TabMeta[] } */
const tabs = [
  { id: 'offerables', to: '/app/business/offerables', label: "Products & Services", icon: 'factory' },
  { id: 'pricelists', to: '/app/business/pricelists', label: "Price Lists", icon: 'tag' },
  { id: 'employees', to: '/app/business/employees', label: "Employees", icon: 'idCardLanyard' },
  { id: 'workflows', to: '/app/business/workflows', label: "Workflows", icon: 'hammer' },
];

/**
 * @param {{ className?: ExtractClassName<TabLayout> }} props
 */
function Business({ className }) {
  return <TabLayout
    title="Business"
    to="/app/business"
    tabs={tabs}
    hed={<Search />}
    className={className}
    />
}

export default Business;