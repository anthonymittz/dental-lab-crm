/**
 * @param {import("better-sqlite3").Database} db 
 */
function clearTable(db, table) {
  const statement = db.prepare(`DELETE FROM ${table};`);
  
  return statement.run();
}

export default clearTable;