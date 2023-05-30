import React from 'react'
import Title from '../Title/Title'
import Input from '../Input/Input'
import ButtonGroup from '../ButtonGroup/ButtonGroup'
import Ideas from '../Ideas/Ideas'
import AiResponse from '../AiResponse/AiResponse'
import { useEffect } from 'react'
import { getAi } from '../../services/getOpenAi'

export default function Assistant() {
  //To remove 
  const sampleResponse = " Aquí tienes una lista escueta de algunos trabajos de jornada completa más demandados:\n\nDesarrollador de software  Enfermero/a\nIngeniero/a de datos\nAnalista financiero\nGerente de ventas\nIngeniero/a de software\nEspecialista en marketing digital\nContador/a\nAnalista de datos\nGerente de proyectos\n"

  const [request, setRequest] = new React.useState("")
  const [response, setResponse] = new React.useState(sampleResponse)
  const [engineProfile, setEngineProfile] = new React.useState("Encontrar empleo")

  const engineProfiles = [
    "Encontrar empleo",
    "Cambiar empleo",
    "Mejorar empleo"
  ]

  const ideas = [
    "¿Qué puedo hacer para mejorar mi perfil",
    "¿Qué tecnologías están empezando a solicitar a gente con mi perfil?",
    "Trabajos a media jornada mas demandados",
    "Puestos superiores a los que aspirar",
    "Ciudades con mejores ofertas",
    "Creame una notificación"
  ]

  useEffect(() => {
    // const a = await getAi("hola")
    // console.log(a)
  }, [])


  const handleGPT = () => {
    getAi(request).then((res) => {

      console.log(res)
      // setResponse(res)

    })
  }

  return (
    <div className=' w-full'>

      <div className='max-w-5xl content-center'>
        <Title />
        <div className="p-2">
          <ButtonGroup options={engineProfiles} selection={engineProfile} handleSelection={setEngineProfile} />

        </div>
        <div className='bg-primarySoft rounded-md'>

          <Input request={request} handleRequest={setRequest} handleGPT={() => handleGPT()} />

          <div className='grid grid-cols-2'>
            <Ideas options={ideas} handleRequest={setRequest} />
            <AiResponse response={response} />

          </div>

        </div>



      </div>


    </div>)
}