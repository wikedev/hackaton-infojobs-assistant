import Title from '../Title/Title'
import Input from '../Input/Input'
import ButtonGroup from '../ButtonGroup/ButtonGroup'
import Ideas from '../Ideas/Ideas'
import AiResponse from '../AiResponse/AiResponse'
import {useState} from 'react'
import {getAi} from '../../services/getOpenAi.ts'

import {
	getCV,
	getInfoJobsOffers,
	getProfile,
	getOfferDescriptionById,
} from '../../services/getInfojobs.ts'

export default function Assistant() {
	const [request, setRequest] = useState('')
	const [response, setResponse] = useState('ʕ•́ᴥ•̀ʔっ')
	const [engineProfile, setEngineProfile] = useState('Encontrar empleo')

	const engineProfiles = [
		'Encontrar empleo',
		'Cambiar empleo',
		'Mejorar empleo',
	]

	interface Ideas {
		[key: string]: string[]
	}

	const ideas: Ideas = {
		'Encontrar empleo': [
			'Que falta en mi curriculum',
			'¿Qué puedo hacer para mejorar mi perfil?',
			'Trabajos a media jornada mas demandados',
		],
		'Cambiar empleo': [
			'Que cambiar del curriculum',
			'Ciudades con mejores ofertas',
			'Sueldos medios en mi sector',
		],
		'Mejorar empleo': [
			'Puestos superiores a los que aspirar',
			'Nuevas tecnologías en mi sector',
		],
	}

	const handleGPT = async () => {
		setResponse('cargando datos...')

		// need authorization to get that information and access (mocked)
		const id = '5f9b2basdfagg'

		const profile = await getProfile(id)
		const CV = await getCV(id)

		const infoJobsOffers = await getInfoJobsOffers(id)
		const individualOffer = await getOfferDescriptionById(id)

		const context = [
			JSON.stringify(profile),
			JSON.stringify(CV),
			JSON.stringify(infoJobsOffers),
			JSON.stringify(individualOffer),
		]

		setRequest('')
		setResponse('procesando...')

		let req
		if (engineProfile == 'Encontrar empleo') {
			req = 'busco trabajo. ' + request
		} else if (engineProfile == 'Cambiar empleo') {
			req =
				'trabajo de ' + CV.experiencia.trabajo + ' y quiero cambiar. ' + request
		} else if (engineProfile == 'Mejorar empleo') {
			req = 'trabajo de ' + CV.experiencia.trabajo + ' ' + request
		} else {
			req = request
		}

		getAi(context, req).then((res: any) => {
			const json = JSON.parse(res)
			setResponse(json.choices[0].message.content || 'OPENAI ERROR')
		})
	}

	return (
		<div className="sm:max-w-wk-sm md:max-w-wk-md  lg:max-w-wk-lg xl:max-w-wk-xl sm:max-h-wk-sm md:max-h-wk-md  lg:max-h-wk-lg xl:max-h-wk-xl content-center ">
			<div className="w-screen min-w-max sm:max-w-wk-sm md:max-w-wk-md  lg:max-w-wk-lg xl:max-w-wk-xl sm:max-h-wk-sm md:max-h-wk-md  lg:max-h-wk-lg xl:max-h-wk-xl content-center">
				<Title />

				<div className="p-2 ">
					<ButtonGroup
						options={engineProfiles}
						selection={engineProfile}
						handleSelection={setEngineProfile}
					/>
				</div>
				<div className="bg-primarySoft rounded-md">
					<Input
						request={request}
						handleRequest={setRequest}
						handleGPT={() => handleGPT()}
					/>

					<div className="grid grid-cols-2 h-max ">
						<Ideas
							options={[...ideas[engineProfile]]}
							handleRequest={setRequest}
						/>
						<AiResponse response={response} />
					</div>
				</div>
			</div>
		</div>
	)
}
