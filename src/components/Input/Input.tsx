
export default function Input({ request, handleRequest, handleGPT }: { request: string, handleRequest: Function, handleGPT: Function }) {
  return (
    <div className='p-12 w-full'>

      <div className="relative">

        <input type="search" id="search" onClick={()=>{handleRequest("")}} className=" block w-full p-4 pzl-10  border text-black border-primary rounded-md " placeholder="Compara mi CV con las ofertas actuales" onChange={e => handleRequest(e.target.value)} value={request} />
        <button onClick={() => handleGPT()} className="text-white absolute right-2.5 bottom-2.5 bg-accent hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">ENVIAR</button>
      </div>





    </div>
  )
}
