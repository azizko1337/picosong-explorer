import openDB from "../db/openDB.js";

async function searchByName(name) {
  const db = await openDB();
  const result = await db.all(
    "SELECT * FROM songs WHERE name LIKE ?",
    `%${name}%`
  );
  await db.close();
  return result;
}

export default searchByName;
