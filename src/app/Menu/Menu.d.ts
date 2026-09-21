interface MenuEntry {
  name: string
  icon?: import("lucide-react/dynamic").IconName
  link?: string
  items?: MenuEntries
}

interface MenuEntries {
  [id: string]: MenuEntry
}