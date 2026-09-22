import Search from "@/components/elements/Search.jsx";
import { merge } from "@lib/merge";

function Orders({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      <div className={a.hed}>
        <h2 className={a.section}>Orders</h2>
        <Search />
      </div>
      <div className={a.content}>Content</div>
    </div>
  );
}

const appearance = {
  container: "grid grid-rows-[max-content_1fr] gap-1 *:bg-test-200",
  hed: "px-4 py-2 flex gap-4 items-center",
  section: "select-none",
  content: "px-4 py-2"
};

/**
 * @function Orders 
 * @param {{ 
 *   className?: Partial<typeof appearance>
 * }} props
 * @returns {JSX.Element}
 */

export default Orders;