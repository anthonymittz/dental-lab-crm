import NavLink from "@/components/elements/NavLink.jsx";
import { merge } from "@lib/merge";
import Brand from "@/assets/brand.svg";
import Button from "@/components/elements/Button.jsx";

/**
 * @param {{ 
 *   className?: Partial<typeof appearance>
 * }} props
 */
function Welcome({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      <Brand className={a.brand} />
      <h1 className={a.name}>
        Современные<br />
        Эстетические<br />
        Решения
      </h1>
      <NavLink to='/app'><Button>Sign in</Button></NavLink>
    </div>
  );
}

const appearance = {
  container: "h-full bg-test-100 text-test-800 flex flex-col gap-8 justify-center items-center",
  name: "text-center text-3xl/10 text-test-600 font-light uppercase tracking-widest mb-16",
  brand: "h-48"
};

export default Welcome;