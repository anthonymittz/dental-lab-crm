import { report } from "@lib/sqlite/utility.js";

/**
 * @param {import("better-sqlite3").Database} db 
 */
function clearAllTables(db) {
  db.prepare('PRAGMA foreign_keys = OFF;').run();

  const tables = db.prepare(`
    SELECT name FROM sqlite_master
    WHERE type='table' AND name NOT LIKE 'sqlite_%';
  `).all();

  for (const table of tables) {
    // @ts-ignore
    db.prepare(`DELETE FROM "${table.name}";`).run();
  }
  
  db.prepare('PRAGMA foreign_keys = ON;').run();
  
  report('Cleared all tables');
}

export default clearAllTables;