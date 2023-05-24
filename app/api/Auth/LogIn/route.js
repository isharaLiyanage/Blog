import { NextResponse } from "next/server";
import Connection from "../../hello/connectDb";
import bcrypt from "bcryptjs";
import Jwt from "jsonwebtoken";

export async function POST(req, res) {
  try {
    const data = await req.json();
    console.log(data);
    if (!data.username || !data.password) {
      return NextResponse.json({
        status: 400,
        error: "Missing username or password",
      });
    }

    const q = "SELECT * FROM user WHERE user_name = ? ";
    const response = await new Promise((resolve, reject) => {
      Connection.query(q, [data.username], (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      });
    });

    if (response.length === 0) {
      return NextResponse.json({ status: 409, error: "User not found" });
    }

    const comparePassword = bcrypt.compareSync(
      data.password,
      response[0].user_password
    );
    if (!comparePassword) {
      return NextResponse.json({ status: 409, error: "Wrong password" });
    }

    const token = Jwt.sign({ id: response[0].user_id }, "ishara");
    const nextRes = NextResponse.json({ status: 200, name: data.username });
    nextRes.cookies.set({
      name: "jwt",
      value: token,
      httpOnly: true,
      maxAge: 60 * 60,
    });
    return nextRes;
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, error: "Internal server error" });
  }
}
