import Link from 'next/link'
import { headers } from 'next/headers'
 
export default function NotFound() {
  const headersList = headers()
  const domain = headersList.get('host')
  return (
    <div className="min-h-screen flex justify-center  text-blue-800 flex-col gap-5 items-center">
      <h2 className='font-bold text-4xl'>Not Found</h2>
      <p>Could not find requested resource</p>
      <p>
        Go to <Link className='font-bold p-2 bg-blue-100 rounded' href="/">Home Page</Link>
      </p>
    </div>
  )
}