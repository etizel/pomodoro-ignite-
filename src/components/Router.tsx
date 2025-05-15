import { Routes, Route } from 'react-router-dom';
import { Header } from '../pages/Header';
import { History } from '../pages/History';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
}
