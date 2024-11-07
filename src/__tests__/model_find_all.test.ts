import User from "../models/User";
import { test } from "vitest";

test("Database Model", async () => {
  const { count, rows } = await User.findAndCountAll();

  console.log(count, rows);
});
