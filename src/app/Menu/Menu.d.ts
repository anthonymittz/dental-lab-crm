interface MenuEntry {
  id: string
  name: string
  icon?: import("lucide-react/dynamic").IconName
  link?: string
  items?: MenuEntry[]
}

interface MenuEntries {
  [id: string]: MenuEntry
}