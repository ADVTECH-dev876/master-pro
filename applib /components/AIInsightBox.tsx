// components/TaskCard.tsx
import { Task } from '@/lib/types';
import { useState } from 'react';

export default function TaskCard({ task }: { task: Task }) {
  const [status, setStatus] = useState(task.status);
  const [comment, setComment] = useState('');

  const handleStatusChange = (newStatus: Task['status']) => {
    setStatus(newStatus);
    // In real app: call API
  };

  const handleComment = () => {
    if (comment.trim()) {
      console.log('Add comment:', comment);
      setComment('');
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-3 transition-all hover:shadow-md">
      <h4 className="font-medium">{task.title}</h4>
      <div className="flex gap-2 mt-2">
        {(['To Do', 'In Progress', 'Completed'] as const).map(s => (
          <button
            key={s}
            onClick={() => handleStatusChange(s)}
            className={`px-2 py-1 text-xs rounded ${
              status === s ? 'bg-blue-100 text-blue-700' : 'bg-gray-100'
            }`}
          >
            {s}
          </button>
        ))}
      </div>
      <div className="mt-3 flex gap-2">
        <input
          type="text"
          placeholder="Add comment..."
          className="flex-1 border rounded px-2 py-1 text-sm"
          value={comment}
          onChange={e => setComment(e.target.value)}
        />
        <button
          onClick={handleComment}
          className="bg-gray-200 px-2 py-1 rounded text-sm"
        >
          Comment
        </button>
      </div>
    </div>
  );
}
