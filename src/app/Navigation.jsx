import Menu from "@/app/Menu/Menu.jsx";
import NavLink from "@/app/NavLink.jsx";
import { merge } from "@lib/merge";
import BrandSmall from "@/assets/brand-sm.svg";
import { LogOut, Settings } from "lucide-react";

function Navigation({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <nav className={a.container}>
      <AccountCard />
      <Menu className={{ container: 'grow' }} />
      <AppCard />
    </nav>
  );
}
function AppCard() {
  return (
    <div className="flex items-center card">
      <NavLink to='/settings' className={{ container: "flex gap-2"}}>
        <Settings />
        <span>Settings</span>
      </NavLink>
    </div>
  );
}

function AccountCard() {
  return (
    <div className="flex gap-3 justify-between items-center card bg-primary-50">
      <NavLink to="/dashboard" className={{ container: "flex gap-3 items-center" }}>
        <BrandSmall className="h-10" />
        <span className="grow text-lg tracking-wider">СЭР</span>
      </NavLink>
      <NavLink to="/"><LogOut className="opacity-20" height={18} /></NavLink>
    </div>
  );
}

const appearance = {
  container: "flex flex-col gap-2 bg-primary-100"
};

export default Navigation;