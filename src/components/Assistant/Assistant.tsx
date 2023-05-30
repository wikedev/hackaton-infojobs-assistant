import Title from '../Title/Title'
import Input from '../Input/Input'
import ButtonGroup from '../ButtonGroup/ButtonGroup'
import Ideas from '../Ideas/Ideas'
import AiResponse from '../AiResponse/AiResponse'
import {  useState } from 'react'
import { getAi } from '../../services/getOpenAi.ts'

import {getInfoJobsOffers} from '../../services/getOffers.ts'

export default function Assistant() {

  
  const [request, setRequest] = useState("")
  const [response, setResponse] = useState("-")
  const [engineProfile, setEngineProfile] =  useState("Encontrar empleo")

  const engineProfiles = [
    "Encontrar empleo",
    "Cambiar empleo",
    "Mejorar empleo"
  ]

  interface Ideas {
    [key: string]: string[]
  }


  const ideas:Ideas = {
    "Encontrar empleo":[
      "Compara mi CV con las ofertas actuales",
      "¿Qué puedo hacer para mejorar mi perfil",
      "Trabajos a media jornada mas demandados", 
    ],
    "Cambiar empleo":[
      "Ciudades con mejores ofertas",
      "Sueldos medios en mi sector",
    ],
    "Mejorar empleo":[
      "Puestos superiores a los que aspirar",
      "Nuevas tecnologías en mi sector",
    ]
    
    }

  

  const handleGPT = () => {
    setResponse("cargando...")

    getInfoJobsOffers().then((res:any) => {
      console.log(res)
      const json = JSON.parse(res)
      const a = json.data[0].attributes.description
      setRequest(a)
    })



    getAi(request).then((res:any) => {
      const json = JSON.parse(res)
      setResponse(json.choices[0].message.content)

    })
    
  }

  return (
    <div className='sm:max-w-wk-sm md:max-w-wk-md  lg:max-w-wk-lg xl:max-w-wk-xl sm:max-h-wk-sm md:max-h-wk-md  lg:max-h-wk-lg xl:max-h-wk-xl content-center '>

      <div className='w-screen min-w-max sm:max-w-wk-sm md:max-w-wk-md  lg:max-w-wk-lg xl:max-w-wk-xl sm:max-h-wk-sm md:max-h-wk-md  lg:max-h-wk-lg xl:max-h-wk-xl content-center'>
        
        <Title />

        <div className="p-2 ">
          <ButtonGroup options={engineProfiles} selection={engineProfile} handleSelection={setEngineProfile} />

        </div>
        <div className='bg-primarySoft rounded-md'>

          <Input request={request} handleRequest={setRequest} handleGPT={() => handleGPT()} />

          <div className='grid grid-cols-2 h-max '>
            <Ideas options={[...ideas[engineProfile],]} handleRequest={setRequest} />
            <AiResponse response={response} />

          </div>

        </div>



      </div>


    </div>)
}
