import Navigation from "@/app/Navigation.jsx";
import { merge } from "@lib/merge";
import { Outlet } from "react-router";

function Layout({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <div className="grid grid-rows-[64px_1fr] h-screen overflow-hidden">
      <Navigation />
      <Outlet />
    </div>
  );
}

const appearance = {
  container: ""
};

export default Layout;