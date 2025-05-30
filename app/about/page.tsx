import React from 'react'
import Image from 'next/image'
import { constructMetadata } from '@/lib/global-data'

type Props = {}

export const metadata = constructMetadata({
  title: 'About'
})

const page = (props: Props) => {
  return (
    <div className='min-h-screen text-center flex flex-col items-center'>
      <div className='w-full px-4 sm:px-6 lg:px-8'>
        <img
          src="/batch.jpg"
          alt="Batch 2020"
          className="mx-auto max-w-full lg:max-w-4xl rounded-lg shadow-md"
        />
      </div>
      <div className='mt-4'>
        An Initiative from Batch-2020 Manipal
      </div>
    </div>
  )
}

export default page