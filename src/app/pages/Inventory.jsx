import { merge } from "@lib/merge";

function Inventory({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      Inventory
    </div>
  );
}

const appearance = {
  container: "centered"
};

export default Inventory;