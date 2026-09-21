import { merge } from "@lib/merge";

function Account({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      Account
    </div>
  );
}

const appearance = {
  container: "centered"
};

export default Account;