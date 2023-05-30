import {useState} from 'react'

export default function Input({
	request,
	handleRequest,
	handleGPT,
}: {
	request: string
	handleRequest: Function
	handleGPT: Function
}) {
	const [prev, setPrev] = useState('Que falta en mi curriculum')

	return (
		<div className="p-12 w-full">
			<div className="relative">
				<input
					type="search"
					id="search"
					/*onClick={()=>{handleRequest("")}}*/ className=" block w-full p-4 pzl-10  border text-black border-primary rounded-md "
					placeholder={prev}
					onChange={(e) => {
						handleRequest(e.target.value)
					}}
					value={request}
				/>
				<button
					onClick={() => {
						setPrev(request)
						handleGPT()
					}}
					className="text-white absolute right-2.5 bottom-2.5 bg-accent hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					ENVIAR
				</button>
			</div>
		</div>
	)
}
