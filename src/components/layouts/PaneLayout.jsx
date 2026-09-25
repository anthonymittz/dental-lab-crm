import { is } from "@lib/merge";

/** Allowed units in template.
 * @typedef { 'px' | 'rem' | 'em' | 'fr' | '%' | 'vh' | 'vw' } GridUnit
 */

/** Recursive type checking utility
 * @template {string} T
 * @typedef {T extends `${infer Head} ${infer Tail}` 
 *   ? Head extends `${number}${GridUnit}` 
 *     ? `${Head} ${VerifyTracks<Tail>}` 
 *     : never 
 *   : T extends `${number}${GridUnit}` 
 *     ? T 
 *     : never} VerifyTracks
 */

/** Pane layout (horizontal / vertical) 
 *   
 * Example: `<PaneLayout flow="column" template="12rem 1fr" />`  
 *   
 * Template:  
 * - fixed lengths: `100px`, `2rem`  
 * - percentages: `25%`  
 * - fractionals: `2fr`  
 * - functions: `repeat(3)`, `minmax(100px, auto)`
 * @template {string} T
 * @param {{ 
 *   className?: appearance
 *   flow?: 'row'|'column'
 *   template: T & VerifyTracks<T>
 *   children?: import("react").ReactNode
 * }} props
 * 
 */
function PaneLayout({
  className = appearance,
  flow = 'column',
  template,
  children = null
}) {  
  const a = is(`h-full grid gap-1 ${flow ? 'grid-flow-row' : 'grid-flow-col'}`, className);
  return <div className={a} style={getLayout(template, flow)}>{ children }</div>;
}

function getLayout(template, flow) {
  return template
    ? flow === 'row'
      ? { gridTemplateRows: template }
      : { gridTemplateColumns: template }
    : { gridAutoFlow: flow };
}

/** @type {string} */
const appearance = "";

export default PaneLayout;