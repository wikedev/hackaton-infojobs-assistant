import React from 'react'

export default function AiResponse({ response }) {
  return (
    <div className='p-2 pr-4 pb-4 '>
      <textarea className='p-2 bg-primaryLight text-primary w-full h-72 rounded-xl' defaultValue={response} />
    </div>
  )
}
