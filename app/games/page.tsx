"use client"

import React, { useState } from 'react';
import Task from "@/components/Coba";
import TaskPage from '@/components/Coba';

const PerjalananIslam = () => {
  const [currentScene, setCurrentScene] = useState(0);
  const [rukunIslam, setRukunIslam] = useState(0);

  const story = [
    {
      title: 'Memulai Perjalanan Islam',
      text: 'Kamu ingin mempelajari agama Islam. Apa yang ingin kamu lakukan?',
      options: [
        { text: 'Mempelajari Rukun Islam', nextScene: 1 },
        { text: 'Mempelajari Syahadat', nextScene: 2 },
      ],
    },
    {
      title: 'Mempelajari Rukun Islam',
      text: 'Rukun Islam adalah lima pilar utama agama Islam. Apa yang ingin kamu pelajari?',
      options: [
        { text: 'Syahadat', nextScene: 3 },
        { text: 'Sholat', nextScene: 4 },
        { text: 'Zakat', nextScene: 5 },
        { text: 'Puasa', nextScene: 6 },
        { text: 'Haji', nextScene: 7 },
      ],
    },
    {
      title: 'Mempelajari Rukun Islam',
      text: 'Rukun Islam adalah lima pilar utama agama Islam. Apa yang ingin kamu pelajari?',
      options: [
        { text: 'Syahadat', nextScene: 3 },
        { text: 'Sholat', nextScene: 4 },
        { text: 'Zakat', nextScene: 5 },
        { text: 'Puasa', nextScene: 6 },
        { text: 'Haji', nextScene: 7 },
      ],
    },
    {
      title: 'Mempelajari Rukun Islam',
      text: 'Rukun Islam adalah lima pilar utama agama Islam. Apa yang ingin kamu pelajari?',
      options: [
        { text: 'Syahadat', nextScene: 3 },
        { text: 'Sholat', nextScene: 4 },
        { text: 'Zakat', nextScene: 5 },
        { text: 'Puasa', nextScene: 6 },
        { text: 'Haji', nextScene: 7 },
      ],
    },
    {
        title: 'Menuju Cahaya Islam',
        text: 'Kamu terlahir di tengah keluarga yang beragam agama. Sejak kecil, kamu selalu tertarik dengan Islam dan ingin mempelajari lebih dalam tentangnya. Hari ini, kamu memutuskan untuk memulai perjalananmu menuju cahaya Islam. Apa yang ingin kamu lakukan pertama kali?',
        options: [
          { text: 'Mencari Masjid', nextScene: 1 },
          { text: 'Membaca Al-Quran', nextScene: 2 },
          { text: 'Menonton Video Edukasi Islam', nextScene: 3 },
        ],
      },
      {
        title: 'Masjid Pertamamu',
        text: 'Kamu tiba di masjid terdekat dan merasa sedikit gugup. Kamu ingin bertemu dengan ustadz/ustadzah untuk mendapatkan bimbingan belajar Islam. Bagaimana kamu akan mencarinya?',
        options: [
          { text: 'Bertanya kepada pengurus masjid', nextScene: 4 },
          { text: 'Mencari ruangan khusus belajar Islam', nextScene: 5 },
          { text: 'Menunggu di ruang sholat', nextScene: 6 },
        ],
      },
    // ... (lanjutkan dengan adegan dan pilihan lain)
  ];

  const handleOptionClick = (nextScene: any) => {
    setCurrentScene(nextScene);

    if (nextScene >= 3 && nextScene <= 7) {
      setRukunIslam(rukunIslam + 1);
    }
  };

  const showScene = () => {
    const scene = story[currentScene];
    return (
      <div className="scene">
        <h2>{scene.title}</h2>
        <p>{scene.text}</p>
        <ul className="options">
          {scene.options.map((option) => (
            <li key={option.text}>
              <button onClick={() => handleOptionClick(option.nextScene)}>
                {option.text}
              </button>
            </li>
          ))}
        </ul>
        {rukunIslam >= 5 && (
          <div className="congratulations">
            Selamat! Kamu telah mempelajari semua Rukun Islam!
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="perjalanan-islam">
      <h1>Perjalanan Islam</h1>
      {/* {showScene()} */}
      <Task />
    </div>
  );
};

export default PerjalananIslam;
