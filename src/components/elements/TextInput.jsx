import Icon from "@/components/elements/Icon.jsx";
import { merge } from "@lib/merge";
import { useState } from "react";

/**
 * @param {{ 
 *   className?: Partial<typeof appearance>
 *   initialState?: string
 *   placeholder?: string
 *   icon?: import("react").ReactNode
 *   onChange?: (value: string) => void
 * }} props
 */
function TextInput({
  className = appearance,
  initialState = "",
  icon = null,
  placeholder,
  onChange = value => {}
}) {
  const a = merge(appearance, className);
  const [value, setValue] = useState(initialState);

  return (
    <div className={a.container}>
      { icon }
      <input 
        type="text"
        className={a.input}
        placeholder={placeholder}
        value={value}
        onChange={e => (setValue(e.target.value), onChange(e.target.value))} />
      <button onClick={() => setValue('')} className={a.button}>
        <Icon type="x" size={18} className="opacity-50" />
      </button>
    </div>
  );
}

const appearance = {
  container: `
    pl-2 flex gap-2 items-center
  bg-c-100 text-c-600 
  focus-within:bg-c-50 focus-within:text-c-950`,
  input: "p-0 py-1 focus:outline-none focus-visible:ring-0",
  button: "px-2 py-1"
};

export default TextInput;