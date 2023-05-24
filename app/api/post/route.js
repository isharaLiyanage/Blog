import { NextResponse } from "next/server";
import Connection from "../hello/connectDb";

export async function GET() {
  try {
    const data = await new Promise((resolve, reject) => {
      Connection.query("SELECT * FROM blog_post", function (err, rows) {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(err);
  }
}

export async function POST(req) {
  const data = await req.json();
  console.log(data);
  if (!data.title || !data.post) {
    return NextResponse.json({
      status: 400,
      error: "Somthing missing ",
    });
  }

  try {
    await new Promise((resolve, reject) => {
      const q =
        "INSERT INTO blog_post (blog_title, blog_cover, blog_post , blog_date) VALUES (?,?,?,?)";
      Connection.query(
        q,
        [data.title, data.cover, data.post, data.date],
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
    });

    return NextResponse.json({ massage: "post Uploaded !" });
  } catch (err) {
    return NextResponse.json({ massage: "Something wrong" });
  }
}
