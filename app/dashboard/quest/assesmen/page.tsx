import Link from 'next/link';
import React from 'react';

export default function AssessmentPage() {
  const posts = [
    {
      title: "Ujian Tengah Semester",
      link: "https://google.com"
    },
    {
      title: "Ujian Semester",
      link: "https://google.com"
    }
  ];

  return (
    <div className="flex h-screen items-center justify-center">
      <TopNavigation/>
      <div className="grid gap-4">
        {posts.map((post, index) => (
          <AssessmentList key={index} data={post} />
        ))}
      </div>
    </div>
  );
}

interface iData {
  title: string
  link: string
}

function AssessmentList({ data }: {data: iData }) {
  return (
    <Link href={data.link} prefetch={false} target='_blank'
       className="bg-blue-500 hover:bg-blue-700 text-white text-2xl font-bold py-5 px-10 w-full rounded">
        {data.title}
    </Link>
  );
}

function TopNavigation() {

  return (
    <nav className="top-0 w-full p-5 fixed bg-blue-600 text-white flex justify-between">
      <Link href="/dashboard/quest">
        <h1 className="flex text-xl text-center justify-evenly gap-10">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>Assesmen
        </h1>
      </Link>
    </nav>
  );
}
