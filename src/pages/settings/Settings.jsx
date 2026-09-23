import Button from "@/components/elements/Button.jsx";
import HedLayout from "@/components/layouts/HedLayout.jsx";

/**
 * @param {{ className?: ExtractClassName<HedLayout> }} props
 */
function Settings({ className }) {
  return <HedLayout 
    title="Settings"
    to="/app/settings"
    hed={<Options />}
    className={className} />;
}

function Options() {
  return (
    <div className="flex gap-2 flex-row justify-end items-center h-full">
      <Button size="sm" type="secondary" disabled>Reset</Button>
      <Button size="sm" type="primary">Save</Button>
    </div>
  )
}

export default Settings;