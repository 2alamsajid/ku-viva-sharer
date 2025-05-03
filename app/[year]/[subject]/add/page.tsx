import AddVivaForm from '@/components/reusable/AddVivaForm'
import React from 'react'

interface Props {
    params: { year: string; subject: string };
}

const AddVivaPage = ({ params }: Props) => {
  return (
    <div className="flex flex-col min-h-screen py-2 px-4">
         <AddVivaForm 
         year={parseInt(params.year)}
         subject={params.subject}
         />
    </div>
  )
}

export default AddVivaPage