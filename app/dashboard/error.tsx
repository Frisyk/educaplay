'use client'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex flex-col mt-20 text-2xl gap-5 items-center justify-center">
      <h2>Something went wrong!</h2>
      <button className="bg-red-400 p-5 text-white rounded-xl" onClick={() => reset()}>Try again</button>
    </div>
  )
}