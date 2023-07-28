import sqlite3 from "sqlite3";
import { open } from "sqlite";

export default async function openDB() {
  return open({
    filename: process.cwd() + "/db/picosong.sqlite",
    driver: sqlite3.Database,
  });
}
