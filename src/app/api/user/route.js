import { NextResponse } from "next/server"
import user from "../../../Model/User"
import connectDB from "../../lib/connectDB"

export function GET(){
    return NextResponse.json({
        message:"Get"
    })
}

export async function POST(req){
    
    await connectDB()
    const data = await req.json()
    const {name, email, phoneNumber, area} = data
    const person = new user({
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        area:area
    })
    await person.save()

    return NextResponse.json({
        message:"ok"
    })
}