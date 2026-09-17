import { parseSelector } from "../utility.js";

/**
 * @param {import("better-sqlite3").Database} db 
 * @param {string} table - "users"
 * @param {string} selector - "273d" or {id: "273d"}
 * @param {string} column - "name"
 * @param {string} data - `{first: 'john', last: 'doe'}`
 */
function putJson(db, table, selector, column, data) {
  const [key, value] = parseSelector(selector);

  const statement = db.prepare(
    `UPDATE ${table} SET ${column} = ? WHERE ${key} = ?;`);

  return statement.run(JSON.stringify(data), value);
}

export default putJson;