const infoJobsToken = process.env.INFOJOBS_TOKEN ?? ''

export async function getInfoJobsOffers() {
  const res = await fetch('https://api.infojobs.net/api/7/offer?category=informatica-telecomunicaciones', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${infoJobsToken}`
    }
  })

  const { items } = await res.json()

  const listOfOffers = items.map(item => {
    const { id, title, province, experienceMin, link, teleworking } = item

    return {
      id,
      title,
      province: province.value,
      experienceMin: experienceMin.value,
      link,
      teleworking: teleworking?.value ?? 'No especificado'
    }
  })

  return listOfOffers
}

async function getOfferDescriptionById (id) {
  const res = await fetch(`https://api.infojobs.net/api/7/offer/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${infoJobsToken}`
    }
  })

  const { description } = await res.json()

  return description
}