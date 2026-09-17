import { merge } from "@lib/merge";
import { Database } from "lucide-react";
import { useEffect } from "react";

function DatabaseControls({ className = appearance }) {
  const a = merge(appearance, className);

  useEffect(() => {
    const ping = async () => {
      const res = await window.db.ping();
      console.log(res);
    }
    ping();
  }, []);

  return (
    <div className={a.container}>
      <h2 className={a.header}>
        <Database />
        <span>Database Controls</span>
      </h2>
    </div>
  );
}

const appearance = {
  container: "",
  header: "flex flex-row gap-1"
};

export default DatabaseControls;