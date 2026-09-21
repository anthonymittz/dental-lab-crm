import { merge } from "@lib/merge";

function Business({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      Business
    </div>
  );
}

const appearance = {
  container: "centered"
};

export default Business;