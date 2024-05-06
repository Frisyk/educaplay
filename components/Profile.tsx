import { getCurrentUser, getUserbyEmail } from '@/lib/action';
import Link from 'next/link';
import ButtonLogout from './ButtonLogout';
import Image from 'next/image';
import profile from '../public/unknown.png'
import ButtonLogin from './ButtonLogin';


export default async function Profile() {
  const user = await getCurrentUser();
  const userData = user && await getUserbyEmail(user?.email || "unknown")
  const profileImage = typeof user?.image === 'string' ? user?.image : profile;

  return (
    <main className="flex flex-col items-center justify-center md:h-screen">
        {user? <ButtonLogout/> : <ButtonLogin/> }
        <Image
            src={profileImage || profile}
            alt={userData?.email || 'Profile Image'}
            width={400}
            height={400}
            className="w-40 rounded-full mt-28 border-4 border-blue-400"
          />
       <h1 className="font-bold text-3xl mt-5 mb-2 text-blue-900">{user?.name || "Guest"}</h1>
       <p className="text-blue-800">{user?.email}</p>
    </main>
  );
}