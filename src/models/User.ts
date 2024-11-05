import database from "../lib/sequelize";
import { DataTypes } from "sequelize";

const User = database.define(
  "User",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "users",
  },
);

export default User;
