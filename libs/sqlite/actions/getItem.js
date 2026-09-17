/**
 * @param {import("better-sqlite3").Database} db 
 * @param {string} table - `"users"`
 * @param {string|object} query - `string` for IDs, `object` for fields where key is equal to value: `{name: 'john'}`
 * @param {string|object} cols - which columns to return: `"name, password"` (all if omitted)
 */
function getItem(db, table, query, cols) {
  if (typeof query !== 'object' && typeof query !== 'string')
    throw new Error('Cannot get item from DB, wrong selector type');

  const key = typeof query === 'object'
    ? Object.keys(query)[0]
    : 'id';

  const value = typeof query === 'object'
    ? query[key]
    : query;

  const statement = db.prepare(
    `SELECT ${cols || '*'} FROM ${table} WHERE ${key} = ?;`);

  return statement.get(value);
}

export default getItem;