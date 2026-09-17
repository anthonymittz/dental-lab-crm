/**
 * @param {import("better-sqlite3").Database} db 
 */
function listTables(db) {
  const list = db.prepare(
    `SELECT name FROM sqlite_schema WHERE type ='table' AND name NOT LIKE 'sqlite_%';`)
  return list.all().map(e => e.name);
}

export default listTables;