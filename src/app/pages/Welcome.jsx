import Brand from "@/assets/brand.svg";
import NavLink from "@/app/NavLink.jsx";
import Button from "@/app/Button.jsx";
import { merge } from "@lib/merge";

function Welcome({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <main className={a.container}>
      <Brand className="w-96 mb-8" />
      <p className="uppercase tracking-widest mb-2">Лаборатория</p>
      <h1 className="text-4xl text-center mb-8">Современные<br />Эстетические<br />Решения</h1>
      <NavLink to="/dashboard"><Button variant="primary" size="lg">Sign in</Button></NavLink>
    </main>
  );
}

const appearance = {
  container: "h-screen flex flex-col justify-center items-center"
};

export default Welcome;