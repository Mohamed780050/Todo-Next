import { NextRequest, NextResponse } from "next/server";
import connectionFunc from "@/lib/mongobd/connection";

export async function GET(req: NextRequest) {
  try {
    console.log(req);
    const connection = await connectionFunc(
      `${process.env.DATABASE_URL}`,
      "Todo-List",
      "Users"
    );
    const Users = await connection.find().toArray();
    return NextResponse.json(Users);
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "There is an error" }, { status: 500 });
  }
}
