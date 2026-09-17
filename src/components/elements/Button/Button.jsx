import { merge } from "@lib/merge";

function Button({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <button className={a.container}>
      Button
    </button>
  );
}

const appearance = {
  container: ""
};

export default Button;