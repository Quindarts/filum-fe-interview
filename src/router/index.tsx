import { Route, Routes } from 'react-router-dom';
import PrivateRouter from './PrivateRouter';
import { ROUTE_APP } from '@/constants/Route';
import { lazy } from 'react';

const LoginPage = lazy(() => import('@/page/Auth/Login'));
const InstructionPage = lazy(() => import('@/page/Instruction'));
const QuestionPage = lazy(() => import('@/page/Question'));
const ResultPage = lazy(() => import('@/page/Result'));

function Routing() {
  return (
    <Routes>
      <Route path={ROUTE_APP.INDEX} element={<PrivateRouter />}>
        <Route index path={ROUTE_APP.INSTRUCTION} element={<InstructionPage />} />
        <Route path={ROUTE_APP.QUESTION} element={<QuestionPage />} />
        <Route path={ROUTE_APP.RESULT} element={<ResultPage />} />
      </Route>
      <Route index path={ROUTE_APP.LOGIN} element={<LoginPage />} />
    </Routes>
  );
}

export default Routing;
