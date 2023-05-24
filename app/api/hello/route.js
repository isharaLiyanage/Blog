import { NextResponse } from "next/server";

import Connection from "./connectDb";

export async function GET(req) {
  console.log("dd");

  try {
    const data = await new Promise((resolve, reject) => {
      Connection.query("SELECT * FROM user", function (err, rows) {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });

    console.log(data);
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(err);
  }
}
