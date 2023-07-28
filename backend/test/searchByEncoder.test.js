import searchByEncoder from "../controller/searchByEncoder.js";

const result = await searchByEncoder("itunes");
console.log(result.length == 21368 ? "searchByEncoder OK!" : "searchByEncoder NOT OK!")

