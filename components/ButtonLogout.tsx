'use client';

import { signOut } from 'next-auth/react';

const ButtonLogout = () => {
  return (
    <button onClick={() => signOut()} className='fixed rounded-2xl text-white right-0 bg-red-600 top-0 px-10 py-3 m-5 hover:underline'>
      Logout
    </button>
  );
};

export default ButtonLogout;