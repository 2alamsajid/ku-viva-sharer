import React from 'react'

type Props = {
  children?: React.ReactNode
  error: string
}

const ErrorPage = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className='flex flex-col items-center justify-center mb-5'>
        <p className="text-gray-600">{props.error}</p>
      </div>
      <div>{props.children}</div>
    </div>
  )
}

export default ErrorPage