/**
 * @param {import('better-sqlite3').Database} db 
 * @param {string} name 
 * @param {string} schema 
 */
function createTable(db, name, schema) {
  const statement = db.prepare(
    `CREATE TABLE IF NOT EXISTS ${name} (${schema});`);

  statement.run();
  console.log('[DB] createTable: created', name, schema);
}

export default createTable;