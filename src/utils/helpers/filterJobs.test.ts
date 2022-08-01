import { filterJobs } from "./filterJobs";

const sampleArray = [
  {
    name: "Kobe",
    category: "1",
  },
  {
    name: "Jordan",
    category: "1",
  },
  {
    name: "Curry",
    category: "2",
  },
  {
    name: "Lebron",
    category: "2",
  },
  {
    name: "Doncic",
    category: "3",
  },
  {
    name: "Jokic",
    category: "3",
  },
];
const categoryFiltered = [
  {
    name: "Kobe",
    category: "1",
  },
  {
    name: "Jordan",
    category: "1",
  },
];
const nameFiltered = [
  {
    name: "Lebron",
    category: "2",
  },
  {
    name: "Doncic",
    category: "3",
  },
];
const bothFiltered = [
  {
    name: "Kobe",
    category: "1",
  },
];

it("Array filtered by category 1 only", () => {
  expect(filterJobs(sampleArray, "", "1")).toEqual(categoryFiltered);
});
it("Array filtered by search value only", () => {
  expect(filterJobs(sampleArray, "on", "")).toEqual(nameFiltered);
});
it("Array filtered by both search value and category", () => {
  expect(filterJobs(sampleArray, "be", "1")).toEqual(bothFiltered);
});
it("Array is not filtered", () => {
  expect(filterJobs(sampleArray, "", "")).toEqual(sampleArray);
});
