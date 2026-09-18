import Button from "@/components/elements/Button/Button.jsx";

function App() {
  return (
    <div>
      <h1>App</h1>
      <Button onClick={() => window.ipc.swap().then(res => console.log(res))}>Swap</Button>
      <Button onClick={() => window.ipc.db('storage2.db').then(res => console.log('New DB'))}>DB</Button>
      <Button onClick={() => window.ipc.db_listTables().then(res => console.log('Tables', res))}>Tables</Button>
    </div>
  );
}

export default App;