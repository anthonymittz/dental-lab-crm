/**
 * @param {import("better-sqlite3").Database} db
 */
function updateItem(db, table, selector, data) {
  const cols = Object.keys(data);
  const values = Object.values(data);

  const col = typeof selector === 'object'
    ? Object.keys(selector)[0]
    : 'id';

  const selectorValue = typeof selector === 'object'
    ? selector[col]
    : selector;

  const transaction = db.transaction(() => {
    const statements = cols.map((col) => db.prepare(
      `UPDATE ${table} SET ${col} = ? WHERE id = ?;`))
    statements.forEach((s, i) => 
      s.run(values[i], selectorValue));
  });

  transaction();
}

export default updateItem;