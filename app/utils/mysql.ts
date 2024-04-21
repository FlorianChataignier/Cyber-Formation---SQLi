import mysql from "mysql2/promise";

/* The following is for demo purpose. Of course NEVER write the credentials in the code. */

export const getMysqlConnection = async () => {
  const mysqlConnection = await mysql.createConnection({
    host: "mysql",
    port: 3306,
    user: "root",
    password: "aSecret",
    database: "pentestme",
  });
  await mysqlConnection.connect();

  return mysqlConnection;
};
