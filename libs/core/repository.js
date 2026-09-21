import { DB } from "@lib/sqlite/index.js";

/** @type {DB|null} */
let db = null;

export function initRepository(location) {
  db = new DB(location);
  console.log('[repository] Initialized');
}

function useRepository() {
  if (db === null) throw new Error('Repository uninitialized');
  return db;
}

export default useRepository;