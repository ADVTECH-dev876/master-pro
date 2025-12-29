// components/DashboardHeader.tsx
import { User } from '@/lib/types';
import { logout } from '@/lib/auth';
import { useRouter } from 'next/navigation';

export default function DashboardHeader({ user }: { user: User }) {
  const router = useRouter();
  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <header className="bg-white shadow-sm py-3 px-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">TaskFlow</h1>
      <div className="flex items-center gap-3">
        <span className="text-sm">Hello, {user.email}</span>
        <button
          onClick={handleLogout}
          className="text-gray-600 hover:text-gray-900 text-sm"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
