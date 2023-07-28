import openDB from "../db/openDB.js";

async function searchByEncoder(encoder) {
  const db = await openDB();
  const result = await db.all(
    "SELECT * FROM songs WHERE encoder LIKE ?",
    `%${encoder}%`
  );
  await db.close();
  return result;
}

export default searchByEncoder;
