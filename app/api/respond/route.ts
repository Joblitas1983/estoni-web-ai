import { GoogleGenerativeAI } from '@google/generative-ai'
import { GoogleGenerativeAIStream, StreamingTextResponse } from '@vercel/ai'

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || '')

export const runtime = 'edge'

export async function POST(req: Request) {
  const { prompt } = await req.json()
  const model = genAI.getGenerativeModel({ model: 'gemini-pro' })

  const response = await model.generateContentStream(
    `Eres un asistente de alojamiento. ${prompt}`
  )
  const stream = GoogleGenerativeAIStream(response)

  return new StreamingTextResponse(stream)
}