import { merge } from "@lib/merge";
import { useEffect, useState } from "react";

function IPC({ className = appearance }) {
  const a = merge(appearance, className);
  const [res, setRes] = useState('Loading...');

  useEffect(() => {
    const ping = async () => {
      const res = await window.ipc.ping();
      setRes(() => res);
    }
    ping();
  }, []);

  return (
    <div className={a.container}>
      IPC response: { res }
    </div>
  );
}

const appearance = {
  container: ""
};

export default IPC;