import Button from "@/components/elements/Button.jsx";
import List from "@/components/elements/List.jsx";
import { merge } from "@lib/merge";

const items = [
  { id: '1', element: <MenuItem text='Foo' /> },
  { id: '2', element: <MenuItem text='Bar' /> },
];

function MenuItem({ text }) {
  return <Button type="secondary" size="sm" className={{ container: 'w-full text-left' }}>{text}</Button>
}

/**
 * @param {{ 
 *   className?: Partial<typeof appearance>
 * }} props
 */
function DummyList({ className = appearance }) {
  const a = merge(appearance, className);

  return (
    <List items={items} className={{ container: 'gap-1 p-2' }} />
  );
}

const appearance = {
  container: "centered"
};

export default DummyList;