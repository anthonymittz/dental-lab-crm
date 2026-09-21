import Navigation from "@/app/Navigation.jsx";
import { merge } from "@lib/merge";
import { Outlet } from "react-router";

function Layout({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className="grid grid-cols-[minmax(200px,1fr)_6fr] h-screen *:p-1">
      <Navigation />
      <Outlet />
    </div>
  );
}

const appearance = {
  container: ""
};

export default Layout;