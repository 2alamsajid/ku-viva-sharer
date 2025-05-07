import AddVivaForm from '@/components/reusable/AddVivaForm'
import React from 'react'

interface Props {
  params: Promise<{ year: string; subject: string }>;
}

const page = async (props: Props) => {

  const { year, subject } = await props.params
  return (
    <div className="flex flex-col min-h-screen py-2 px-4">
      <AddVivaForm
        year={parseInt(year)}
        subject={subject}
      />
    </div>
  )
}

export default page