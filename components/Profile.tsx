import { getCurrentUser } from '@/lib/session';
import Link from 'next/link';
import ButtonLogout from './ButtonLogout';
import Image from 'next/image';
import profile from '../public/unknown.png'


export default async function Profile() {
  const user = await getCurrentUser();
  const profileImage = typeof user?.image === 'string' ? user?.image : profile;

  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <h1>EducaPlay</h1>
          </div>
        </div>
        <ButtonLogout />
        <h1>{user?.name}</h1>
        {typeof user?.image === 'string' && (
          <Image
            src={profileImage}
            alt={user.name || 'Profile Image'}
            width={400}
            height={400}
          />
        )}
      </div>
    </main>
  );
}