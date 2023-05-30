export default function Ideas({ options, handleRequest }: { options: string[], handleRequest: Function }) {
  return (
    <div className='p-4 pr-2 min-h-72'>
      <div className='bg-white p-2 rounded-md text-black h-full'>
        
          {options.map((option, index) => {
            return (  
                <div key={index} className="text-gray p-2 rounded-md hover:bg-primaryLight hover:text-darkGray active:text-accent active:bg-accentLight" onClick={() => handleRequest(option)}>{option}</div>           
            )
          })}
      
      </div>
    </div>
  )
}
