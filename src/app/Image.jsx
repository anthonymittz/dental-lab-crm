import { merge } from "@lib/merge";

function Image({
  src,
  className = appearance,
}) {
  const a = merge(appearance, className);
  return <image href={src} className={a.container} />;
}

const appearance = {
  container: "w-20 h-20 bg-red",
};

export default Image;