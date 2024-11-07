import { NextRequest, NextResponse } from "next/server";
import connectionFunc from "@/lib/mongobd/connection";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";
export async function GET(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  try {
    const { userId } = await params;
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
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  try {
    const { userId } = await params;
    const { Title, Body, Completed } = await req.json();
    if (!userId || !Title)
      return NextResponse.json(
        { message: "userId and Title are Required" },
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
    revalidatePath("/");
    return NextResponse.json({ message: "Todo is added" }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "something went wrong" },
      { status: 500 }
    );
  }
}
export async function PUT(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  try {
    const { userId } = await params;
    const { id, Title, Body, Completed } = await req.json();
    if (!userId || !id || (!Title && !Body && !Completed))
      return NextResponse.json(
        { message: "userId and Title are Required" },
        { status: 400 }
      );
    const connection = await connectionFunc(
      `${process.env.DATABASE_URL}`,
      "Todo-List",
      "Todos"
    );
    const checkTheTodo = await connection.findOne({
      _id: new ObjectId(`${id}`),
    });
    if (!checkTheTodo)
      return NextResponse.json(
        { message: "Todo Did not found" },
        { status: 404 }
      );
    console.log(id, Title, Body, Completed);
    await connection.updateOne(
      { _id: new ObjectId(`${id}`) },
      {
        $set: {
          Title: Title ? Title : checkTheTodo.Title,
          Body: Body ? Body : checkTheTodo.Body,
          Completed: Completed,
        },
      }
    );
    return NextResponse.json({ message: "Found" });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "something went wrong" },
      { status: 500 }
    );
  }
}
export async function DELETE(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  try {
    const { userId } = await params;
    const { searchParams } = new URL(req.url);
    const TodoId = searchParams.get("TodoId");
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
