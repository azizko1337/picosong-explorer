import searchByName from "../controller/searchByName.js";

const result = await searchByName("metropolis");
console.log(result.length == 43 ? "searchByName OK!" : "searchByName NOT OK!")

