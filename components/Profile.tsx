import { getCurrentUser } from '@/lib/session';
import Link from 'next/link';
import ButtonLogout from './ButtonLogout';
import Image from 'next/image';
import profile from '../public/unknown.png'


export default async function Profile() {
  const user = await getCurrentUser();
  const profileImage = typeof user?.image === 'string' ? user?.image : profile;

  return (
    <main className="flex flex-col items-center justify-center md:h-screen">
        
        <ButtonLogout />
        {typeof user?.image === 'string' && (
          <Image
            src={profileImage}
            alt={user.name || 'Profile Image'}
            width={400}
            height={400}
            className="w-40 rounded-full mt-28 border-4 border-blue-400"
          />
        )}
       <h1 className="font-bold text-3xl mt-5 mb-2 text-blue-900">{user?.name}</h1>
       <p className="text-blue-800">{user?.email}</p>
    </main>
  );
}