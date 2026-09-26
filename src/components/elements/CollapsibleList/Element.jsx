import Button from "@/components/elements/Button.jsx";
import { is, merge } from "@lib/merge";

/**
 * @param {{ 
 *   className?: typeof appearance
 *   children?: import("react").ReactNode
 *   onClick?: () => void
 * }} props
 */
function Element({
  className = appearance,
  children = null,
  onClick = () => {}
}) {
  return (
    <Button
      type="flat"
      size="sm"
      onClick={onClick}
      className={{ container: is(appearance, className) }}>
      { children }
    </Button>
  );
}

/** @type {string} */
const appearance = "text-start flex flex-row gap-1 items-center";

export default Element;