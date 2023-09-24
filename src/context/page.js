'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function PrivateRoute({ children }) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('access_token');

    if (!token) {
      router.push('/register');
    }
  }, [router]);

  return children;
}