import NavLink from "@/components/elements/navigation/NavLink.jsx";
import { merge } from "@lib/merge";
import Logo from '@/assets/brand-sm.svg';

/**
 * @param {{ 
 *   className?: Partial<typeof appearance>
 * }} props
 */
function Brand({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <NavLink to="/app/dashboard">
    <div className={a.container}>
        <Logo className={a.logo} />
        <h1 className={a.name}>СЭР</h1>
    </div>
    </NavLink>
  );
}

const appearance = {
  container: "flex gap-2 items-center",
  logo: "h-8",
  name: "text-lg"
};

export default Brand;