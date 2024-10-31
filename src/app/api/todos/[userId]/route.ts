import { NextRequest, NextResponse } from "next/server";
import connectionFunc from "@/lib/mongobd/connection";
import { ObjectId } from "mongodb";
export async function GET(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  try {
    const { userId } = params;
    if (!userId)
      return NextResponse.json({ message: "Id is Required" }, { status: 400 });
    const connection = await connectionFunc(
      `${process.env.DATABASE_URL}`,
      "Todo-List",
      "Todos"
    );
    const Todos = await connection.find({ Owner: userId }).toArray();
    return NextResponse.json(Todos);
  } catch (err) {
    console.log(err);
    return NextResponse.error();
  }
}
export async function POST(
  req: Omit<NextRequest, "body"> & {
    body: { Title: string; Body: string; Completed: boolean };
  },
  { params }: { params: { userId: string } }
) {
  try {
    const { userId } = params;
    const { Title, Body, Completed } = req.body;
    if (!userId || !Title)
      return NextResponse.json(
        { message: "Id and Title are Required" },
        { status: 400 }
      );
    const connection = await connectionFunc(
      `${process.env.DATABASE_URL}`,
      "Todo-List",
      "Todos"
    );
    await connection.insertOne({
      Title: Title,
      Body: Body,
      Completed: Completed,
      Owner: userId,
      createdAt: `${Date.now()}`,
    });
    return NextResponse.json({ message: "Todo is added" }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "something went wrong" },
      { status: 500 }
    );
  }
}
// export async function PUT() {
//   try {
//     return NextResponse.json();
//   } catch (err) {
//     console.log(err);
//     return NextResponse.json(
//       { message: "something went wrong" },
//       { status: 500 }
//     );
//   }
// }
export async function DELETE(
  req: Omit<NextRequest, "body"> & { body: { TodoId: string } },
  { params }: { params: { userId: string } }
) {
  try {
    const { userId } = params;
    const { TodoId } = req.body;
    if (!userId || !TodoId)
      return NextResponse.json(
        { message: "User ID and Todo ID are Required" },
        { status: 400 }
      );
    const connection = await connectionFunc(
      `${process.env.DATABASE_URL}`,
      "Todo-List",
      "Todos"
    );
    const checkTheTodo = await connection.findOne({
      _id: new ObjectId(`${TodoId}`),
    });
    if (!checkTheTodo)
      return NextResponse.json({ message: "Todo Not found" }, { status: 404 });
    await connection.deleteOne({ _id: new ObjectId(`${TodoId}`) });
    return NextResponse.json({ message: `${checkTheTodo.Title} is deleted` });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "something went wrong" },
      { status: 500 }
    );
  }
}
