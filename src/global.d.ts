export {};

declare global {
  interface Window {
    ipc: {
      ping: () => Promise<string>;
      db_addItem:        (...args) => Promise<any>;
      db_clearTable:     (...args) => Promise<any>;
      db_createTable:    (...args) => Promise<any>;
      db_getAllItems:    (...args) => Promise<any>;
      db_getItem:        (...args) => Promise<any>;
      db_getItems:       (...args) => Promise<any>;
      db_getJson:        (...args) => Promise<any>;
      db_listTables:     (...args) => Promise<any>;
      db_putJson:        (...args) => Promise<any>;
      db_removeItem:     (...args) => Promise<any>;
      db_updateItem:     (...args) => Promise<any>;
      db_clearAllTables: (...args) => Promise<any>;
    }
  }
}