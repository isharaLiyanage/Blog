import { NextResponse } from "next/server";
import Connection from "../../hello/connectDb";
import bcrypt from "bcryptjs";
import Jwt from "jsonwebtoken";

export async function POST(request) {
  console.log("dd");
  const data = await request.json();

  if (!data.username || !data.email || !data.password) {
    return;
  }
  const q = "SELECT * FROM user WHERE user_email = ? OR user_name = ? ";
  try {
    await new Promise((resolve, reject) => {
      Connection.query(
        q,
        [data.email, data.username],
        async (err, response) => {
          if (err) {
            reject(err);
          }
          if (response.length) {
            console.log("User already exists");
            reject(new Error("User already exists"));
          } else {
            const salt = bcrypt.genSaltSync(10);
            const hashPassword = bcrypt.hashSync(data.password, salt);

            Connection.query(
              `
          INSERT INTO user (user_name, user_email, user_password)
          VALUES (?,?,?)
        `,
              [data.username, data.email, hashPassword],
              (err, res) => {
                if (err) {
                  console.log("dsdds" + err);
                  reject(err);
                } else {
                  console.log("first");
                  resolve(res);
                }
              }
            );
          }
        }
      );
    });
    const token = Jwt.sign({ id: data.username }, "ishara");
    const nextRes = NextResponse.json({ status: 200, massage: "Done" });
    nextRes.cookies.set({
      name: "jwt",
      value: token,
      httpOnly: true,
      maxAge: 60 * 60,
    });
    return nextRes;
  } catch (error) {
    console.log(error);
    if (error.message === "User already exists") {
      return NextResponse.json({ error: "User already exists" });
    } else {
      return NextResponse.json(error);
    }
  }
}
