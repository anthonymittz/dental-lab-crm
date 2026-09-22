import { is, merge } from "@lib/merge";
import { useEffect, useRef, useState } from "react";

const defaultOptions = [
  { id: "",  label: 'Select...' },
  { id: "1", label: 'Item 1' },
  { id: "2", label: 'Item 2' },
];

/** @typedef {typeof defaultOptions[0]} Option */

/**
 * @param {{
 *   className: Partial<typeof appearance>
 *   options?: Option[]
 *   children?: import("react").ReactNode
 * }} props
 */
function Selector({
  className = appearance,
  options = defaultOptions,
  children = null
}) {
  const a = merge(appearance, className);
  const [selected, select] = useState(/** @type {Option|null} */(null));

  const entries = options.map(o => <option className="hover:bg-accent-500" key={o.id} value={o.id}>{o.label}</option>);

  return (
    <div className={a.container}>
      <select className={a.selector}>
        {entries}
      </select>
      <Arrow className={a.arrow} />
    </div>

  );
}

function Arrow({ className = "" }) {
  return (
    <div className={className}>
      <svg className={is("h-4 w-4 text-gray-400")} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>  
    </div>
  );
}

const appearance = {
  container: "relative w-64",
  selector: "w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2.5 pr-10 text-sm text-primary-800 shadow-sm outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500",
  arrow: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3",
};

export default Selector;