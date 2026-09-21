import ipc from "@/ipc.js";
import { useNavigate } from "react-router";

function useReload() {
  const navigate = useNavigate();
  ipc.reload(() => navigate('/'));
}

export default useReload;