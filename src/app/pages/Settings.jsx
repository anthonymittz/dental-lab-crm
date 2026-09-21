import { merge } from "@lib/merge";

function Settings({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      Settings
    </div>
  );
}

const appearance = {
  container: "centered"
};

export default Settings;