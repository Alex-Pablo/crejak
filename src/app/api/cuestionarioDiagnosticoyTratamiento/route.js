import { NextResponse } from "next/server"
import cuestionarioDiagnosticoyTratamiento from "../../../Model/CuestionarioDiagnosticoyTratamiento"
import connectDB from "../../lib/connectDB"


export async function POST(req){
    
    await connectDB()
    const data = await req.json()
    const {pregunta1,pregunta2,pregunta3,pregunta4,pregunta5,pregunta6,pregunta7,pregunta8, pregunta10, idUser} = data

    console.log(data)
    const person = new cuestionarioDiagnosticoyTratamiento({
        pregunta1: pregunta1,
        pregunta2: pregunta2,
        pregunta3: pregunta3,
        pregunta4:pregunta4,
        pregunta5 :pregunta5,
        pregunta6: pregunta6,
        pregunta7 :pregunta7,
        pregunta8 :pregunta8,
        pregunta9:pregunta10,
        idUser:idUser
    })
    await person.save()

    return NextResponse.json({
        message:"ok"
    })
}