import BottomNavigation from '@/components/BottomNav';
import { Metadata } from 'next';
  
export const metadata: Metadata = {
  title: {
    template: '%s | EducaPlay',
    default: 'EducaPlay Dashboard',
  },
  description: 'Web App belajar PAI interaktif.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      <BottomNavigation />
    </div>
  );
}