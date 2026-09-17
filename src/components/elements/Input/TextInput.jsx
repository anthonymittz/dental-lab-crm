import Button from "@/components/elements/Button/Button.jsx";
import { merge } from "@lib/merge/index.js";
import { useState } from "react";

function TextInput({
  className = appearance,
  initialValue = "",
  buttonText = "Go",
  children = null,
  onSubmit = value => {}
}) {
  const a = merge(appearance, className);
  const [value, setValue] = useState(initialValue);
  const updateValue = e => setValue(e.target.value);

  return (
    <form action="javascript:void(0);" className={a.container}>
      { children && <label>{ children }</label> }
      <input type="text" value={value} onInput={updateValue} />
      <Button onClick={() => onSubmit(value)}>{ buttonText }</Button>
    </form>
  );
}

const appearance = {
  container: "flex flex-row gap-1"
};

export default TextInput;