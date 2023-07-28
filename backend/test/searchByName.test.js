import searchByName from "../controller/searchByName.js";

test(`Search for 'metropolis' name`, async () => {
  const result = await searchByName("metropolis");
  expect(result.length).toBe(43);
});
