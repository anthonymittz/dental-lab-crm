/**
 * @param {import("better-sqlite3").Database} db 
 */
function removeItem(db, table, key) {
  const statement = db.prepare(
    `DELETE FROM ${table} WHERE id = ?`);
  return statement.run(key);
}

export default removeItem;
