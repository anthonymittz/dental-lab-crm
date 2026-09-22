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
      <NavLink to="/settings"><Settings /></NavLink>
      <NavLink to="/"><LogOut /></NavLink>
    </nav>
  );
}

function AccountCard() {
  return (
    <div className="flex gap-3 justify-between items-center">
      <NavLink to="/dashboard" className={{ container: "flex gap-3 items-center" }}>
        <BrandSmall className="h-10" />
        <span className="grow text-lg tracking-wider">СЭР</span>
      </NavLink>
    </div>
  );
}

const appearance = {
  container: "px-4 py-2 flex flex-row gap-4 justify-between items-center bg-primary-100"
};

export default Navigation;