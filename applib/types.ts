// lib/types.ts
export type Role = 'Admin' | 'Manager' | 'Employee';

export interface User {
  id: string;
  email: string;
  role: Role;
}

export interface Task {
  id: string;
  title: string;
  status: 'To Do' | 'In Progress' | 'Completed';
  projectId: string;
  assignedTo: string;
  comments: string[];
}

export interface Project {
  id: string;
  name: string;
}
