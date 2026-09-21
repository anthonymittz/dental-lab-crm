import { merge } from "@lib/merge";

function Finances({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      Finances
    </div>
  );
}

const appearance = {
  container: "centered"
};

export default Finances;