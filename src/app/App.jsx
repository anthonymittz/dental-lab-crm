import Button from "@/components/elements/Button/Button.jsx";
import ipc from "@/ipc.js";

function App() {
  const ping = () => ipc.ping({foo: 'bar'}).then(res => console.log(res));

  return (
    <div>
      <h1>App</h1>
    </div>
  );
}

export default App;