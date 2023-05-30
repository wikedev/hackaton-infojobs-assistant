
export default function ButtonGroup({ options, selection, handleSelection }: { options: string[], selection: string, handleSelection: Function }) {

  return (
    <div className=' border-primary border rounded-md'>
      {options.map((option, index) => {

        const style = option === selection ?
          "h-12 w-1/3  border-primary border bg-primary text-white" :
          "h-12 w-1/3  border-primary border bg-white text-primary"

        return (
          <button key={index} onClick={() => handleSelection(option)} className={style}>
            {option}</button>
        )

      })}

    </div>

  )
}
