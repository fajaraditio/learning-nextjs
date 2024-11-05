import { test } from "vitest";
import sequelize from "../lib/sequelize";

test("Database Connnection", async ({ onTestFailed }) => {
  await sequelize.authenticate();

  onTestFailed((e) => {
    console.log(e);
  });
});
