export async function getAi(context: string[], description: string) {
	var myHeaders = new Headers()
	myHeaders.append('Content-Type', 'application/json')
	myHeaders.append(
		'Authorization',
		'Bearer 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',
	) // this secret have 72 hours of life and is restricted to use

	var raw = JSON.stringify({
		model: 'gpt-3.5-turbo',
		messages: [
			{
				role: 'system',
				content:
					'Eres un asistente en infojobs, tienes que ayudar a un usuario a encontrar trabajo. Tienes acceso a los datos del usuario y curriculum. Se conciso y directo. Menos de 90 palabras, prioriza listas concisas. ',
			},
			{
				role: 'system',
				content: 'Datos del perfil' + context[0],
			},
			{
				role: 'system',
				content: 'Datos del curriculum' + context[1],
			},
			{
				role: 'user',
				content: description,
			},
		],
	})

	return fetch('https://api.openai.com/v1/chat/completions', {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow',
	})
		.then((response) => {
			return response.text()
		})
		.catch((error) => console.log('error', error))

	// const completion = await openai.createChatCompletion({
	//   model: 'gpt-3.5-turbo',
	//   temperature: 0.2,
	//   messages: [
	//     ...INITIAL_MESSAGES,
	//     {
	//       role: ChatCompletionRequestMessageRoleEnum.User,
	//       content: description
	//     }
	//   ]
	// })

	// const data = completion.data.choices[0].message?.content ?? ''
	// //   let json

	// //   try {
	// //     json = JSON.parse(data)
	// //     return NextResponse.json(json)
	// //   } catch {
	// //     return new Response('No se ha podido transformar el JSON', { status: 500 })
	// //   }

	// return data
}

export async function getAiResponse() {
	// return getAi("cuentame un cuento")
}
