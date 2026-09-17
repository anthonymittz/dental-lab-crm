import { merge } from "@lib/merge";
import { Database } from "lucide-react";
import { useEffect } from "react";

async function dummyDBCall() {
  await window.ipc.db_createTable('users', 'id TEXT PRIMARY KEY, name TEXT NOT NULL UNIQUE');
  console.log('Table created');
  console.log(await window.ipc.db_listTables());
}

function DatabaseControls({ className = appearance }) {
  const a = merge(appearance, className);
  useEffect(() => {
    dummyDBCall();
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