import dbConnect from "@/libs/db"
import { NextResponse } from "next/server"
import Data from '@/model/data'

export async function GET(request: Request) {
    await dbConnect();
    const data = await Data.find()
    return NextResponse.json(data,{status:200})
}
export async function POST(req: Request) {
    await dbConnect();
    const body = await req.json();
    console.log(body);
    try {
        const data = await Data.create(body)
        return NextResponse.json(data,{status:200})
        
    } catch (error) {
        return NextResponse.json(error,{status:500})
    }
}