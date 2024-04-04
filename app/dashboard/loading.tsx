import LoadingSpinner from '@/components/Loading';
import React from 'react'

function Loading() {
  return (
    <div className="flex min-h-screen w-full text-xl justify-center items-center">
        <LoadingSpinner/>
    </div>
  )
}

export default Loading;