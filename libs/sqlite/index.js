import { createDB } from "./utility";
import setActions from "./actions";

const filename = 'storage.db';
const database = createDB(filename);
const db = setActions(database);

db.clearAllTables();

export default db;