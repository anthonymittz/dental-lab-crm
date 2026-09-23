import { is } from '@lib/merge';
import * as Icons from 'lucide-react';

/** @type {{[key in IconName]: import('lucide-react').LucideIcon}} */
const iconMap = {
  layoutDashboard: Icons.LayoutDashboard,
  settings: Icons.Settings,
  calendarDays: Icons.CalendarDays,
  notepadText: Icons.NotepadText,
  truck: Icons.Truck,
  handshake: Icons.Handshake,
  login: Icons.LogIn,
  logout: Icons.LogOut,
  wallet: Icons.Wallet,
  shelvingUnit: Icons.ShelvingUnit,
  search: Icons.Search,
  x: Icons.X,
  stickyNote: Icons.StickyNote,
  hammer: Icons.Hammer,
  stickyNoteCheck: Icons.StickyNoteCheck,
  listTodo: Icons.ListTodo,
  fileBox: Icons.FileBox,
  archive: Icons.Archive,
};

/**
 * @param {{ type: keyof iconMap, className?: string } & import('lucide-react').LucideProps} props
 */
function Icon({ type, className, ...props }) {
  const IconComponent = iconMap[type];
  return <IconComponent className={is(className)} {...props} />
}

export default Icon;