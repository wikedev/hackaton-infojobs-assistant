// const infoJobsToken = ""//process.env.INFOJOBS_TOKEN ?? ''

export async function getCV(id: string) {
	// const res = await fetch('https://api.infojobs.net/api/7/cv', {
	//   headers: {
	//     'Content-Type': 'application/json',
	//     Authorization: `Basic ${infoJobsToken}`
	//   }
	// })

	// const { items } = await res.json()

	// const listOfOffers = items.map((item:any) => {
	//   const { id, title, province, experienceMin, link, teleworking } = item

	//   return {
	//     id,
	//     title,
	//     province: province.value,
	//     experienceMin: experienceMin.value,
	//     link,
	//     teleworking: teleworking?.value ?? 'No especificado'
	//   }
	// })

	// return listOfOffers

	const data = {
		id: id + 34,
		code: '26DBE83E-3048-3952-A401E8D782ACB1C8',
		name: 'Curriculum 1',
		incompleteSteps: ['education', 'experience'],
		educations: [
			{
				id: 14826429040,
				educationLevelCode: 'otros-titulos',
				courseName: 'Some other course',
				finishingDate: '2012-10-01',
			},
			{
				id: 9248429800,
				educationLevelCode: 'formacion-profesional-grado-superior',
				courseCode: 'actividades-agrarias',
				startingDate: '2005-10-01',
				finishingDate: '2006-11-01',
			},
			{
				id: 9248429800,
				nivelEducativo: 'formacion-profesional-grado-superior',
				courseCode: 'actividades-agrarias',
				startingDate: '2005-10-01',
				finishingDate: '2006-11-01',
			},
		],

		experiencia: {
			company: 'InfoJobs',
			trabajo: 'Web programmer',
			descripcion:
				'Programming as a web developer in several languages like Java, Javascript, HTML, SQL, ...',
			fechaInicio: '2006-09-14',
			finaFinal: '2011-06-14',
			sector: 'servicios-de-ti',
			level: 'especialista',
			category: 'informatica-telecomunicaciones',
			subcategories: ['arquitectura', 'programacion', 'gestion-proyectos'],
			salario_minimo: '18.000',
			salarion_maximo: '24.000',
			salaryPeriod: 'bruto-ano',
		},
	}

	return data
}

export async function getInfoJobsOffers(id: string) {
	// const res = await fetch('https://api.infojobs.net/api/7/offer?category=informatica-telecomunicaciones', {
	//   headers: {
	//     'Content-Type': 'application/json',
	//     Authorization: `Basic ${infoJobsToken}`
	//   }
	// })
	// const { items } = await res.json()
	// const listOfOffers = items.map((item:any) => {
	//   const { id, title, province, experienceMin, link, teleworking } = item
	//   return {
	//     id,
	//     title,
	//     province: province.value,
	//     experienceMin: experienceMin.value,
	//     link,
	//     teleworking: teleworking?.value ?? 'No especificado'
	//   }
	// })
	// return listOfOffers

	const data = [
		{
			id: id,
			currentPage: 1,
			pageSize: 2,
			totalResults: 35,
			currentResults: 2,
			totalPages: 18,
			availableSortingMethods: ['relevancia-desc', 'updated-desc'],
			sortBy: 'updated-desc',
			sinceDate: '_24_HOURS',
			facets: [
				{
					key: 'province',
					name: 'Provincia',
					values: [
						{
							key: 'madrid',
							value: 'Madrid',
							count: 39,
						},
						{
							key: 'barcelona',
							value: 'Barcelona',
							count: 35,
						},
						{
							key: 'illes-balears',
							value: 'Islas Baleares/Illes Balears',
							count: 26,
						},
					],
				},
				{
					key: 'city',
					name: 'Población',
					values: [
						{
							key: 'barcelona',
							value: 'Barcelona',
							count: 26,
						},
						{
							key: 'montcada-i-reixac',
							value: 'Montcada i Reixac',
							count: 2,
						},
					],
				},
				{
					key: 'teleworking',
					name: 'Presencial/Teletrabajo',
					values: [
						{
							key: 'trabajo-solo-presencial',
							value: 'Presencial',
							count: 35,
						},
					],
				},
				{
					key: 'category',
					name: 'Categoría',
					values: [
						{
							key: 'turismo-restauracion',
							value: 'Turismo y restauración',
							count: 32,
						},
						{
							key: 'atencion-a-cliente',
							value: 'Atención a clientes',
							count: 1,
						},
						{
							key: 'otros',
							value: 'Otros',
							count: 1,
						},
						{
							key: 'administracion-publica',
							value: 'Administración Pública',
							count: 1,
						},
					],
				},
				{
					key: 'study',
					name: 'Estudios',
					values: [
						{
							key: 'educacion-secundaria-obligatoria',
							value: 'Educación Secundaria Obligatoria',
							count: 14,
						},
						{
							key: 'sin-estudios',
							value: 'Sin estudios',
							count: 8,
						},
					],
				},
				{
					key: 'contractType',
					name: 'Tipo de contrato',
					values: [
						{
							key: 'indefinido',
							value: 'Indefinido',
							count: 22,
						},
						{
							key: 'de-duracion-determinada',
							value: 'De duración determinada',
							count: 10,
						},
						{
							key: 'otros-contratos',
							value: 'Otros contratos',
							count: 2,
						},
						{
							key: 'fijo-discontinuo',
							value: 'Fijo discontinuo',
							count: 1,
						},
					],
				},
				{
					key: 'workDay',
					name: 'Jornada laboral',
					values: [
						{
							key: 'completa',
							value: 'Completa',
							count: 24,
						},
						{
							key: 'parcial-indiferente',
							value: 'Parcial - Indiferente',
							count: 5,
						},
						{
							key: 'indiferente',
							value: 'Indiferente',
							count: 3,
						},
						{
							key: 'parcial-manana',
							value: 'Parcial - Mañana',
							count: 1,
						},
						{
							key: 'parcial-tarde',
							value: 'Parcial - Tarde',
							count: 1,
						},
						{
							key: 'intensiva-manana',
							value: 'Intensiva - Mañana',
							count: 1,
						},
					],
				},
				{
					key: 'experienceMin',
					name: 'Experiencia',
					values: [
						{
							key: 'al-menos-1-ano',
							value: 'Al menos 1 año',
							count: 14,
						},
						{
							key: 'al-menos-2-anos',
							value: 'Al menos 2 años',
							count: 10,
						},
						{
							key: 'no-requerida',
							value: 'No Requerida',
							count: 4,
						},
						{
							key: 'al-menos-3-anos',
							value: 'Al menos 3 años',
							count: 4,
						},
						{
							key: 'mas-de-5-anos',
							value: 'Más de 5 años',
							count: 2,
						},
						{
							key: 'al-menos-4-anos',
							value: 'Al menos 4 años',
							count: 1,
						},
					],
				},
				{
					key: 'country',
					name: 'País',
					values: [
						{
							key: 'espana',
							value: 'España',
							count: 226,
						},
						{
							key: 'alemania',
							value: 'Alemania',
							count: 1,
						},
					],
				},
			],
			queryParameters: {
				study: [],
				province: ['barcelona'],
				salaryPeriod: 'seleccionar',
				city: [],
				contractType: [],
				query: 'camarero',
				experienceMin: [],
				category: ['-'],
				workDay: [],
				teleworking: [],
			},
			offers: [
				{
					id: '258eae420249ffa67cf64681a2ef80',
					title: 'Camareros/as y 2º de Sala Zona Penedès',
					province: {
						id: 9,
						value: 'Barcelona',
					},
					city: 'Vilafranca del Penedès',
					link:
						'https://www.infojobs.net/vilafranca-del-penedes/camareros-2-sala-zona-penedes/of-i258eae420249ffa67cf64681a2ef80',
					category: {
						id: 160,
						value: 'Turismo y restauración',
					},
					contractType: {
						id: 5,
						value: 'Otros contratos',
					},
					subcategory: {
						id: 3116,
						value: 'Restauración',
					},
					salaryMin: {
						id: 10,
						value: '12 ?',
					},
					salaryMax: {
						id: 10,
						value: '12 ?',
					},
					salaryPeriod: {
						id: 1,
						value: 'Bruto/hora',
					},
					experienceMin: {
						id: 6,
						value: 'Al menos 2 años',
					},
					workDay: {
						id: 1,
						value: 'Completa',
					},
					study: {
						id: 50,
						value: 'Bachillerato',
					},
					teleworking: {
						id: 1,
						value: 'Presencial',
					},
					published: '2023-05-09T14:04:02.000Z',
					updated: '2023-05-09T14:04:02.000Z',
					author: {
						id: '8275252453610761051133485087',
						privateId: 968194760,
						name: 'ADECCO',
						uri: 'https://adecco.ofertas-trabajo.infojobs.net',
						logoUrl:
							'https://multimedia.infojobs.net/api/v1/tenants/c7e2b9c1-8480-43b0-ad9e-000c17aa2cbb/domains/718302b6-5343-43d3-a8a3-829dc3da0893/buckets/6f3ab1cc-5920-4f4e-b131-46a4587a0e1f/images/06/065e27e3-7d83-402c-8da5-514eb31c4b2d?jwt=eyJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1NTI0NzU4MTUsInJxcyI6IkdFVFxcL3RlbmFudHMvYzdlMmI5YzEtODQ4MC00M2IwLWFkOWUtMDAwYzE3YWEyY2JiL2RvbWFpbnMvNzE4MzAyYjYtNTM0My00M2QzLWE4YTMtODI5ZGMzZGEwODkzL2J1Y2tldHMvNmYzYWIxY2MtNTkyMC00ZjRlLWIxMzEtNDZhNDU4N2EwZTFmL2ltYWdlcy8wNi8wNjVlMjdlMy03ZDgzLTQwMmMtOGRhNS01MTRlYjMxYzRiMmQiLCJtZXRhZGF0YSI6eyJydWxlIjp7InZlcnNpb24iOiIyMDE2LTEwIiwiYWN0aW9ucyI6W119fX0.hhKyy9MdL2-xst0DbHeeB0pz6fO3UvLSmf5syxGW4Pu1enugBcEj9wvLiwqm-7H9E23RL38iUzDC9m1KiEhepZVHLMYwnlhPlV-kD8LolmMS9ALxIicuUSjfhRrLe_LBux-Z_BfNUZFKePLyT1L9HGjKVG6-_hqf9efrMgRABAwExUjdu_iBXyFvrd1EpPPH19yrBhT8NWdkNV6iYmcp2_kCSWLazyXn8CU1dz76Oh16GwWpJ5_OWCIy_7ytljwWzr5ypt1yyA4JWtakkH1tNJDM-trSC02oaM4DWmx0t36RmsL4FQYynVx0lU0aIpaEchzChdoIPHbgR_lSWOva7w&AccessKeyId=d724d9a53d95a810',
						corporateResponsive: false,
						showCorporativeHeader: false,
					},
					requirementMin:
						'-Experiencia como camarero/a o segundo de Sala.\r\n- Nivel de Inglés alto valorable.\r\n- Valorable tener conocimientos del mundo del vino.\r\n- Disponibilidad para trabajar fines de semana y festivos.',
					bold: false,
					applications: '0',
					executive: false,
					salaryDescription: '12? - 12? Bruto/hora',
					multiProvince: false,
				},
			],
		},
	]
	return data
}

export async function getOfferDescriptionById(id: string) {
	// const res = await fetch(`https://api.infojobs.net/api/7/offer/${id}`, {
	//   headers: {
	//     'Content-Type': 'application/json',
	//     Authorization: `Basic ${infoJobsToken}`
	//   }
	// })
	// const { description } = await res.json()
	// return description

	const data = {
		title: 'Adjunto Responsable de Tienda y Colaboradores',

		fiscalAddress: 'C/. XXXX, 28XXX Madrid, MADRID, España' + id,
	}
	return data
}

export async function getProfile(id: string) {
	const data = {
		perfil: {
			id: id,
			email: 'candidate@domain.net',
			hasPhoto: true,
			photo:
				'http://www.infojobs.net/candidato.foto?id_candidato=31959971-de9f-47e1-8a12-1d83224axxxx',
			name: 'Hermenegildo',
			surname1: 'Pi',
			surname2: 'Tur',
			fullName: 'Hermenegildo Pi Tur',
			city: 'Barcelona Capital',
			province: 'Barcelona',
			accountCreation: '2007-09-03T21:49:27.000+0000',
			lastCVUpdate: '2020-10-23T09:15:10.000+0000',
			lastInscripcion: '2020-05-22T10:30:48.000+0000',
			skills: [
				{
					id: 172788035,
					name: 'Desarrollo cliente-servidor',
					type: 'expertise',
					key: 'desarrollo-cliente-servidor',
				},
				{
					id: 172788097,
					name: 'Arquitectura de Software',
					type: 'expertise',
					key: 'arquitectura-de-software',
				},
			],

			skillCategory: [
				{
					id: 13,
					name: 'Idiomas',
					order: 13,
					subcategories: [
						{
							id: 1301,
							name: 'Dominio de idiomas',
						},
						{
							id: 1302,
							name: 'Traducción e interpretación',
						},
					],
				},
			],
		},
	}

	return data
}
