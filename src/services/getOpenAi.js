
import {
  Configuration,
  ChatCompletionRequestMessageRoleEnum,
  OpenAIApi
} from 'openai'

const infoJobsToken = "bWlkdWdhOnFzNW5LcHAzOE4oSA"//process.env.INFOJOBS_TOKEN ?? ''
const openaiToken = "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"//process.env.OPENAI_TOKEN ?? ''

const configuration = new Configuration({ apiKey: openaiToken })
const openai = new OpenAIApi(configuration)

const INITIAL_MESSAGES = [
  {
    role: ChatCompletionRequestMessageRoleEnum.System,
    content: 'You are a helpful assistant for people who are looking for a job, looking to improve at work or want to change jobs. Be concise',
    // content: `Quiero que cuando te pase una descripción de una oferta de trabajo en programación, le des una nota del 1 al 10.

    // El formato de respuesta JSON será el siguiente:

    // {
    //   "score": [score],
    //   "message": [message]
    // }

    // Tienes que cambiar lo que hay entre corchetes por el valor. El máximo de caracteres permitido para "message" es de 300. Se conciso, estricto y directo. Apunta los errores clave, especialmente los de ortografía (si existiesen) o recomendaciones claras. Por ejemplo:

    // {
    //   "score": 6,
    //   "message": "Hay faltas de ortografía: 'inscribete', 'solido' y falta usar signos de interrogación. Se repite mucho la palabra HTML. Y faltaría clarificar los proyectos que se harían"
    // }`
  }
]



export async function getAi(description) {

  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    temperature: 0.2,
    messages: [
      ...INITIAL_MESSAGES,
      {
        role: ChatCompletionRequestMessageRoleEnum.User,
        content: description
      }
    ]
  })

  const data = completion.data.choices[0].message?.content ?? ''
  //   let json

  //   try {
  //     json = JSON.parse(data)
  //     return NextResponse.json(json)
  //   } catch {
  //     return new Response('No se ha podido transformar el JSON', { status: 500 })
  //   }

  return data
}

export async function getAiResponse() {

  return getAi("cuentame un cuento")
}
