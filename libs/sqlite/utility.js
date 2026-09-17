import path from "node:path";
import fs from "node:fs";
import Database from 'better-sqlite3';
import { v4 } from "uuid";

export function createDB(filename) {
  const filepath = path.resolve(filename);
  const db = new Database(filepath);
  // db.pragma('journal_mode = WAL');
  report('Created a database:', filename);
  return db;
}

export function report(...args) {
  console.log('[DB]', ...args);
}

export function newID() {
  return v4();
}

/**
 * @param {any} selector 
 * @returns {[string, string]}
 */
export function parseSelector(selector) {
  if (typeof selector !== 'object' && typeof selector !== 'string')
    throw new Error('Cannot parse selector, not object or string');

  const key = typeof selector === 'object'
    ? Object.keys(selector)[0]
    : 'id';
  const value = typeof selector === 'object'
    ? selector[key]
    : selector;

  return [key, value];
}

export { hash, compare } from "@lib/encryption";