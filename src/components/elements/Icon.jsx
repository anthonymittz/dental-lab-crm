import { is } from '@lib/merge';
import * as Icons from 'lucide-react';

/** @type {{[key in IconName]: import('lucide-react').LucideIcon}} */
const iconMap = {
  archive: Icons.Archive,
  calendarClock: Icons.CalendarClock,
  calendarDays: Icons.CalendarDays,
  calendarRange: Icons.CalendarRange,
  chevronDown: Icons.ChevronDown,
  circlePile: Icons.CirclePile,
  drill: Icons.Drill,
  factory: Icons.Factory,
  fileBox: Icons.FileBox,
  fileDown: Icons.FileDown,
  fileUp: Icons.FileUp,
  flaskConical: Icons.FlaskConical,
  hammer: Icons.Hammer,
  handshake: Icons.Handshake,
  hospital: Icons.Hospital,
  idCardLanyard: Icons.IdCardLanyard,
  kanban: Icons.Kanban,
  layoutDashboard: Icons.LayoutDashboard,
  listTodo: Icons.ListTodo,
  login: Icons.LogIn,
  logout: Icons.LogOut,
  notepadText: Icons.NotepadText,
  package: Icons.Package,
  recycle: Icons.Recycle,
  search: Icons.Search,
  settings: Icons.Settings,
  shelvingUnit: Icons.ShelvingUnit,
  stickyNote: Icons.StickyNote,
  stickyNoteCheck: Icons.StickyNoteCheck,
  tag: Icons.Tag,
  trendingUp: Icons.TrendingUp,
  truck: Icons.Truck,
  wallet: Icons.Wallet,
  x: Icons.X,
};

/**
 * @param {{ type: keyof iconMap, className?: string } & import('lucide-react').LucideProps} props
 */
function Icon({ type, className, ...props }) {
  const IconComponent = iconMap[type];
  return <IconComponent className={is(className)} {...props} />
}

export default Icon;