const infoJobsToken = "YjdiYzgwNWYxZTU2NGEzMjgxNGZmY2JhZGY0YjAxZTg6REZyODlMcTA0dW41ZVZxQXdjUE9vNkh4bm0zc2o2WkJoNm5pMDFvbjZkY2lFQ24xR3E="//process.env.INFOJOBS_TOKEN ?? ''

export async function getInfoJobsOffers() {

  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Basic YjdiYzgwNWYxZTU2NGEzMjgxNGZmY2JhZGY0YjAxZTg6REZyODlMcTA0dW41ZVZxQXdjUE9vNkh4bm0zc2o2WkJoNm5pMDFvbjZkY2lFQ24xR3E=");
  myHeaders.append("Cookie", "IJUSERUID=145e1fbd-dca7-489b-ae1e-1b0a790e04f7; JSESSIONID=kpJPUViFgmmPM4mN5WAB3i17");


  fetch("https://api.infojobs.net/api/7/offer?category=informatica-telecomunicaciones", {
    method: 'GET',
    headers: myHeaders,
    mode: 'no-cors',
    redirect: 'follow'
  })
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));


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
}

export async function getOfferDescriptionById(id: string) {
  const res = await fetch(`https://api.infojobs.net/api/7/offer/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${infoJobsToken}`
    }
  })

  const { description } = await res.json()

  return description
}