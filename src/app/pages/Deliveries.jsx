import { merge } from "@lib/merge";

function Deliveries({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      Deliveries
    </div>
  );
}

const appearance = {
  container: "centered"
};

export default Deliveries;