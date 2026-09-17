import path from "node:path";
import fs from "node:fs";
import Database from 'better-sqlite3';

export function createDB(filename) {
  const filepath = path.resolve(filename);
  const db = new Database(filepath);
  report('Created a database:', filename);
  return db;
}

export function report(...args) {
  console.log('[DB]', ...args);
}