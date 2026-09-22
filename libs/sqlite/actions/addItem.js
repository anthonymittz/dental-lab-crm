import { v4 } from "uuid";

/**
 * @param {import("better-sqlite3").Database} db 
 * @example addItem(db, 'users', {name: 'johndoe'})
 */
function addItem(db, table, data) {
  if (!data.id) data.id = v4();
  const keys = Object.keys(data);
  const tags = keys.map(k => '@' + k);
  const insert = db.prepare(
    `INSERT OR IGNORE INTO ${table} (${keys}) VALUES (${tags})`);
  
  insert.run(data);
}

export default addItem;

