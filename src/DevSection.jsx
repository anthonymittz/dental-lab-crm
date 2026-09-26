import Button from "@/components/elements/Button.jsx";
import { merge } from "@lib/merge";
import { useNavigate } from "react-router";

/** DevSection
 * @param {{ 
 *   className?: Partial<typeof appearance>
 *   children?: import("react").ReactNode
 * }} props
 */
function DevSection({
  className = appearance,
  children = null
}) {
  const a = merge(appearance, className);

  return (
    <div className={a.container}>
      Dev Section
      <GoBack />
    </div>
  );
}

function GoBack() {
  const navigate = useNavigate();
  return (
    <Button 
      onClick={() => navigate(-1)} 
      className={{ container: "fixed bottom-6 right-6" }}
    >
      Return to app
    </Button>
  );
}

const appearance = {
  container: "centered"
};

export default DevSection;