import sequelize from "../lib/sequelize";
import User from "../models/User";
import { expect, test } from "vitest";

test("Database Model", () => {
  expect(User === sequelize.models.User).toBe(true);
});
