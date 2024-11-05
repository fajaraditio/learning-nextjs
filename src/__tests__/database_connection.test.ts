import { test } from "vitest";
import database from "../lib/database";

test("Database Connnection", async ({ onTestFailed }) => {
  await database.authenticate();

  onTestFailed((e) => {
    console.log(e);
  });
});
