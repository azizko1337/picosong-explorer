import searchByEncoder from "../controller/searchByEncoder.js";

test(`Search for 'itunes' encoder`, async () => {
  const result = await searchByEncoder("itunes");
  expect(result.length).toBe(21368);
});
