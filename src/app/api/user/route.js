import { NextResponse } from "next/server"
import user from "../../../Model/User"
import connectDB from "../../lib/connectDB"

export async function GET(){
    await connectDB()
    const users = await user.find()
    return NextResponse.json({
        message:users
    })
    l
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
    const resutl =  await person.save()
    return  NextResponse.json({
        response: resutl
    })
}