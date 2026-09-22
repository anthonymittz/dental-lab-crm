/**
 * @param {import("better-sqlite3").Database} db 
 * @param {string} table - `"users"`
 * @param {string|object} query - `string` for IDs, `object` for fields where key is equal to value: `{name: 'john'}`
 * @param {string|object|null} cols - which columns to return: `"name, password"` (all if omitted)
 */
function getItems(db, table, query, cols) {
  if (typeof query !== 'object')
    throw new Error('Cannot get items from DB, wrong selector type');

  const key = Object.keys(query)[0];
  const value = query[key];

  const statement = db.prepare(
    `SELECT ${cols || '*'} FROM ${table} WHERE ${key} = ?;`);

  const items = statement.all(value);

  const result = {};

  items.map(el => {
    result[el.id] = {...el};
    delete result[el.id].id;
  });

  return result;
}

export default getItems;