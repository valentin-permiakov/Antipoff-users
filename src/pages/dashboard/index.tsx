import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

type DashboardProps = {};

const Dashboard: React.FC<DashboardProps> = () => {
  const router = useRouter();
  useEffect(() => {
    if (!sessionStorage.getItem('token')) {
      router.push('/');
    }
  }, []);
  return <div>Have a good coding</div>;
};
export default Dashboard;
