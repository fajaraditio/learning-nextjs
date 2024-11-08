import { test } from "vitest";
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

test("Database Connnection", async ({ onTestFailed }) => {
  const config: mysql.PoolOptions = {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD
  };

  const poolConnection = mysql.createPool(config);

  const db = drizzle({ client: poolConnection });
});
