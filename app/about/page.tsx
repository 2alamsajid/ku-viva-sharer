import React from 'react'
import Image from 'next/image'
import { constructMetadata } from '@/lib/global-data'

type Props = {}

export const metadata = constructMetadata({
  title: 'About'
})

const page = (props: Props) => {
  return (
    <div className='min-h-screen w-screen bg-[#0B1416] text-[#D7DADC] absolute top-0 pt-10 text-center flex flex-col items-center justify-center'>
      <div className='w-full px-4 sm:px-6 lg:px-8'>
        <img
          src="/batch.jpg"
          alt="Batch 2020"
          className="mx-auto max-w-full lg:max-w-4xl rounded-lg shadow-md"
        />
      </div>
      <div className='mt-4'>
        An Initiative from Batch-2020 Manipal {`<`}3
      </div>
      <div className='mt-8 text-sm text-gray-400 hover:text-gray-300 transition-colors'>
        <a 
          href="https://github.com/2mdsajid/ku-viva-sharer" 
          target="_blank" 
          rel="noopener noreferrer"
          className="underline"
        >
          Contribute to this project - Click To Fork the repo
        </a>
      </div>
    </div>
  )
}

export default page