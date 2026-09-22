import Icon from "@/components/elements/Icon.jsx";
import TextInput from "@/components/elements/TextInput.jsx";
import { merge } from "@lib/merge";

/**
 * @param {{ 
 *   className?: Partial<typeof appearance>
 * }} props
 */
function Search({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <TextInput 
      placeholder="Search" 
      icon={<Icon type="search" size={18} />} />
  );
}

const appearance = {
  container: "centered"
};

export default Search;