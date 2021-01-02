import { useEffect } from 'react';

const LogOut = () => {
  useEffect(() => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('userName');
    window.location = '/';
  }, []);
  return null;
};

export default LogOut;
