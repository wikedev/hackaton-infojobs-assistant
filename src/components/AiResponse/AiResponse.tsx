export default function AiResponse({ response }:{response: string}) {
  return (
    <div className='p-4 pl-2 min-h-72'>
      <textarea className='p-2 bg-primaryLight text-primary w-full h-72 rounded-md' onChange={()=>{}} value={response} />
    </div>
  )
}
