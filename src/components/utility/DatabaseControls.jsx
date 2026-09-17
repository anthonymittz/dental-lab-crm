import Button from "@/components/elements/Button/Button.jsx";
import TextInput from "@/components/elements/Input/TextInput.jsx";
import { merge } from "@lib/merge";
import { Database, Loader } from "lucide-react";
import { useEffect, useState } from "react";

async function createTable(name) {
  await window.ipc.db_createTable(name, 'id TEXT PRIMARY KEY, name TEXT NOT NULL UNIQUE');
  console.log('Table created');
}

async function listTables() {
  console.log(await window.ipc.db_listTables());
}

function DatabaseControls({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      <h2 className={a.header}>
        <Database />
        <span>Database Controls</span>
      </h2>
      <TableList />
      <TextInput initialValue="users" onSubmit={name => {createTable(name)}} />
      <Button onClick={listTables}>List</Button>
    </div>
  );
}

function TableList() {
  const [isLoading, setLoading] = useState(true);
  const [tables, setTables] = useState([]);

  const fetch = () => {
    window.ipc.db_listTables().then(res => {
      setTables(res);
      setLoading(false);
    });
  }

  useEffect(fetch, []);

  const list = isLoading 
    ? <Loader /> 
    : <ul className="flex flex-row gap-1">{ tables.map((t, i) => <li key={i}>{ JSON.stringify(t) }</li>) }</ul>;

  return (
    <div className="">
      { list }
      <Button onClick={fetch}>Update</Button>
    </div>
  )
}

const appearance = {
  container: "",
  header: "flex flex-row gap-1"
};

export default DatabaseControls;