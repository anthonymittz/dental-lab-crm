import Button from "@/components/elements/Button.jsx";
import Icon from "@/components/elements/Icon.jsx";
import HedLayout from "@/components/layouts/HedLayout.jsx";

/**
 * @param {{
 *   className?: ExtractClassName<HedLayout>
 *   children?: import("react").ReactNode
 * }} props
 */
function Settings({ className, children = null }) {
  return <HedLayout 
    title="Settings"
    to="/app/settings"
    hed={<Options />}
    className={className}>
      { children }
    </HedLayout>;
}

function Options() {
  return (
    <div className="flex gap-2 flex-row justify-end items-center h-full">
      <Button size="sm" type="secondary"><Icon type="fileDown" className="text-test-600" /></Button>
      <Button size="sm" type="secondary"><Icon type="fileUp" className="text-test-600" /></Button>
      <Button size="sm" type="secondary" disabled className={{container: 'ml-4'}}>Reset</Button>
      <Button size="sm" type="primary">Save</Button>
    </div>
  )
}

export default Settings;