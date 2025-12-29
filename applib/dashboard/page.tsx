// app/dashboard/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { getCurrentUser } from '@/lib/auth';
import { User, Task, Project, Role } from '@/lib/types';
import { useRouter } from 'next/navigation';
import DashboardHeader from '@/components/DashboardHeader';
import TaskCard from '@/components/TaskCard';
import AIInsightBox from '@/components/AIInsightBox';

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [projects] = useState<Project[]>([{ id: 'p1', name: 'Website Redesign' }]);
  const router = useRouter();

  useEffect(() => {
    const u = getCurrentUser();
    if (!u) return router.push('/login');
    setUser(u);

    // Mock tasks
    if (u.role === 'Employee') {
      setTasks([
        { id: 't1', title: 'Design homepage', status: 'To Do', projectId: 'p1', assignedTo: u.id, comments: [] },
        { id: 't2', title: 'Fix login bug', status: 'In Progress', projectId: 'p1', assignedTo: u.id, comments: ['Need help with auth flow'] },
      ]);
    }
  }, [router]);

  if (!user) return null;

  const isAdmin = user.role === 'Admin';
  const isManager = user.role === 'Manager';
  const isEmployee = user.role === 'Employee';

  return (
    <div className="min-h-screen">
      <DashboardHeader user={user} />
      <main className="container mx-auto p-4">
        <h2 className="text-xl font-semibold mb-4">Dashboard — {user.role}</h2>

        {isAdmin && (
          <div className="bg-white p-4 rounded shadow mb-6">
            <h3 className="font-medium mb-2">Admin Actions</h3>
            <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm">+ Create Project</button>
          </div>
        )}

        {isManager && (
          <div className="bg-white p-4 rounded shadow mb-6">
            <h3 className="font-medium mb-2">Manager Actions</h3>
            <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm">+ Create Task</button>
          </div>
        )}

        {isEmployee && (
          <>
            <AIInsightBox />
            <div className="mt-6">
              <h3 className="font-medium mb-3">My Tasks</h3>
              {tasks.map(task => (
                <TaskCard key={task.id} task={task} />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
