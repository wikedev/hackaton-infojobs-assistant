export default function Ideas({ options, handleRequest }: { options: string[], handleRequest: Function }) {
  return (
    <div className='pl-4 pb-4 h-full'>
      <div className='bg-white p-2 rounded-xl text-black h-full'>
        <ul>
          {options.map((option, index) => {
            return (
              <li key={index}>
                <button className="bg-blue-400" onClick={() => handleRequest(option)}>{option}</button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
