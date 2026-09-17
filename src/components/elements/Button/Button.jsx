import { merge } from "@lib/merge";

function Button({
  className = appearance,
  children = "Button",
  ...props
}) {
  const a = merge(appearance, className);

  return (
    <button className={a.container} {...props}>
      { children }
    </button>
  );
}

const appearance = {
  container: "bg-gray-200 rounded-sm px-1"
};

export default Button;