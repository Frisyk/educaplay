'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Modal from './Modals';
import { Post } from '@prisma/client';

export interface SearchParamProps {
  id: string;
  materi: Post[]
}

export default function TopNavigation({ id, materi }: SearchParamProps) {
  const [show, setShow] = useState(false);

  function showModals() {
    setShow(true);
  }

  return (
    <nav className="top-0 w-full p-5 fixed bg-blue-600 text-white flex justify-between">
      <Link href="/dashboard">
        <h1 className="flex gap-2 text-xl">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>Home
        </h1>
      </Link>
      <Link href={`${id}?show=true`} passHref>
        <div onClick={showModals}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
      </Link>
      {show && <Modal materi={materi} link={id} onClose={() => setShow(false)} />}
    </nav>
  );
}

