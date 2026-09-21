import { merge } from "@lib/merge";

function Orders({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      Orders
    </div>
  );
}

const appearance = {
  container: "centered"
};

export default Orders;