// lib/auth.ts
import { User, Role } from './types';

// Mock user storage
let currentUser: User | null = null;

export const login = (email: string, password: string): User | null => {
  // Hardcoded mock users
  const mockUsers: User[] = [
    { id: '1', email: 'admin@example.com', role: 'Admin' },
    { id: '2', email: 'manager@example.com', role: 'Manager' },
    { id: '3', email: 'employee@example.com', role: 'Employee' },
  ];

  const user = mockUsers.find(u => u.email === email);
  if (user && password === 'password') {
    currentUser = user;
    return user;
  }
  return null;
};

export const getCurrentUser = (): User | null => currentUser;
export const logout = () => { currentUser = null; };
