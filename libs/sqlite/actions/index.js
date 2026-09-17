import addItem from './addItem';
import createTable from './createTable';
import clearTable from './clearTable';
import getAllItems from './getAllItems';
import getItem from './getItem';
import getItems from './getItems';
import getJson from './getJson';
import putJson from './putJson';
import removeItem from './removeItem';
import updateItem from './updateItem';
import listTables from './listTables';
import clearAllTables from './clearAllTables.js';
import { report } from '../utility';

export { default as addItem } from './addItem';
export { default as clearTable } from './clearTable';
export { default as createTable } from './createTable';
export { default as getAllItems } from './getAllItems';
export { default as getItem } from './getItem';
export { default as getItems } from './getItems';
export { default as getJson } from './getJson';
export { default as listTables } from './listTables';
export { default as putJson } from './putJson';
export { default as removeItem } from './removeItem';
export { default as updateItem } from './updateItem';

function setActions(db) {
  return {
    createTable: (name, schema) => createTable(db, name, schema),
    clearTable: table => clearTable(db, table),
    
    getItem: (table, selector, fields = null) => getItem(db, table, selector, fields),
    getItems: (table, query, fields = null) => getItems(db, table, query, fields),
    getAllItems: (table, fields = null, order = null) => getAllItems(db, table, fields, order),
    addItem: (table, data) => addItem(db, table, data),
    updateItem: (table, selector, data) => updateItem(db, table, selector, data),
    removeItem: (table, id) => removeItem(db, table, id),

    getJson: (table, selector, column) => getJson(db, table, selector, column),
    putJson: (table, selector, column, data) => putJson(db, table, selector, column, data),

    listTables: () => listTables(db),
    clearAllTables: () => clearAllTables(db),

    reportTableList: () => report('Tables', listTables(db)),
    reportAllItems: (table, fields = null) => report(`Table '${table}':`, getAllItems(db, table, fields)),
  };
}

export default setActions;