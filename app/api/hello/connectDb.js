import mysql from "mysql2";

const Connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "blog_site",
  connectionLimit: 10, // Adjust the limit based on your application's needs
});

export async function connect() {
  try {
    await new Promise((resolve, reject) => {
      Connection.getConnection((err, connection) => {
        if (err) {
          reject(err);
        } else {
          resolve(connection);
        }
      });
    });
    console.log("Connected to MySQL!");
  } catch (err) {
    console.error("Error connecting to MySQL:", err);
    throw err;
  }
}

// Automatically connect when this module is imported
connect();

export default Connection;
