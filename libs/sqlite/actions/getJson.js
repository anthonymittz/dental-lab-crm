import { parseSelector } from "../utility.js";

/**
 * @param {import("better-sqlite3").Database} db
 * @param {string} table - `"users"`
 * @param {string|{[key: string]: string}} selector - `string` (for ID): `12b4`; `object` (for custom field): `{id: "12b4"}` 
 * @param {string} column - `"name"`
 */
function getJson(db, table, selector, column) {
  const [key, value] = parseSelector(selector);
  
  const statement = db.prepare(
    `SELECT ${column} FROM ${table} WHERE ${key} = ?;`);

  // @ts-ignore
  const result = JSON.parse(statement.get(value)[column]);
  return result;
  // console.log('[getJson] Result', result)
}

export default getJson;