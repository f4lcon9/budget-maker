import Data from "@/model/data"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
    const data = await Data.deleteMany()
    return NextResponse.json("HI")
}