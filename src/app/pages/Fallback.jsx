import Button from "@/app/Button.jsx";
import { merge } from "@lib/merge";
import { useNavigate } from "react-router";

function Fallback({ className = appearance }) {
  const a = merge(appearance, className);
  const navigate = useNavigate();

  return (
    <div className={a.container}>
      <h1 className="text-2xl mb-4">Unimplemented</h1>
      <Button onClick={() => navigate(-1)}>Go back</Button>
    </div>
  );
}

const appearance = {
  container: "centered"
};

export default Fallback;