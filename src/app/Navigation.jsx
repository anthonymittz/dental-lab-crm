import Menu from "@/app/Menu.jsx";
import NavLink from "@/app/NavLink.jsx";
import { merge } from "@lib/merge";
import BrandSmall from "@/assets/brand-sm.svg";
import { LogOut } from "lucide-react";

function Navigation({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <nav className={a.container}>
      <AppCard />
      <Menu className={{ container: 'grow' }} />
      <AccountCard />
    </nav>
  );
}
function AppCard() {
  return (
    <div className="flex items-center card">
      <NavLink to='/'>OrdoDens</NavLink>
    </div>
  );
}

function AccountCard() {
  return (
    <div className="flex gap-4 justify-between items-center card bg-primary-50">
      <BrandSmall className="h-10" />
      <p className="grow text-lg tracking-wider">СЭР</p>
      <NavLink to="/"><LogOut className="opacity-30" height={18} /></NavLink>
    </div>
  );
}

const appearance = {
  container: "flex flex-col gap-2 bg-primary-100"
};

export default Navigation;