import { Routes, Route } from 'react-router-dom';
import { Header } from '../pages/Header';
import { History } from '../pages/History';
import { DefaultLayout } from '../layouts/DefaulLayout/index';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Header />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  );
}
