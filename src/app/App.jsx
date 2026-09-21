import Image from "@/app/Image.jsx";
import ipc from "@/ipc.js";
import Brand from "@/assets/brand.svg";

function App() {
  const ping = () => ipc.ping({foo: 'bar'}).then(res => console.log(res));

  return (
    <div>
      <Brand />
      <p>Лаборатория</p>
      <h1>Современные Эстетические Решения</h1>
    </div>
  );
}

export default App;