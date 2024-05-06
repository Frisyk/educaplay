import BottomNavigation from '@/components/BottomNav';
import { getCurrentUser, getUserbyEmail } from '@/lib/action';
import { redirect } from 'next/navigation';  
 
export default async function Layout({ children }: { children: React.ReactNode }) {
  const user = await getCurrentUser()
  const userData = user && await getUserbyEmail(user?.email || "unknown")

  if(userData?.role == "USER") {
    return redirect("/dashboard")
  }

  return (
    <main className='min-h-screen p-2'>
        {children}
    </main>

  );
}