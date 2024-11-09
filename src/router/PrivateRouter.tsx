import { Navigate } from 'react-router-dom';
import useAppStore from '@/store/provider';
import { ROUTE_APP } from '@/constants/Route';
import MainLayout from '@/Layout/MainLayout';

function PrivateRouter() {
  const email = useAppStore((state) => state.email);
  return email?.trim() === '' ? <Navigate to={ROUTE_APP.LOGIN} /> : <MainLayout />;
}

export default PrivateRouter;
