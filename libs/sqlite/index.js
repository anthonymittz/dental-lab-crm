import { createDB } from "./utility";
import setActions from "./actions";

export class DB {
  constructor(filename = 'storage.db') {
    const database = createDB(filename);
    const db = setActions(database);

    db.clearAllTables();
    
    return db;
  }
}

export default DB;