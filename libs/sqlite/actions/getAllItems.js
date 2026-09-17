/**
 * @param {import("better-sqlite3").Database} db 
 * @param {string} table - "users" 
 * @param {string|null} fields - "name, password" 
 * @param {string|null} order - "position ASC"
 * @example
 * getAllItems(db, 'users', 'name, email');
 */
function getAllItems(db, table, fields = null, order = null) {
  const statement = db.prepare(
    `SELECT ${fields || '*'} FROM ${table}${order ? ' ORDER BY ' + order : ''}`);
  return statement.all();
}

export default getAllItems;