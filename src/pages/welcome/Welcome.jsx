import { merge } from "@lib/merge";

function Welcome({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      Welcome
    </div>
  );
}

const appearance = {
  container: "centered"
};

export default Welcome;