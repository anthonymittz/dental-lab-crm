import { merge } from "@lib/merge";

function Schedule({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      Schedule
    </div>
  );
}

const appearance = {
  container: "centered"
};

export default Schedule;